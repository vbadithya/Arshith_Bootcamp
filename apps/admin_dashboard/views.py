import os
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.db.models import Count, Avg, Q
from django.utils import timezone
from datetime import timedelta, datetime

from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from apps.accounts.models import User, UserProfile
from apps.courses.models import Course, Category, Instructor, Module, Lesson
from apps.learning.models import Enrollment, LessonProgress
from apps.certificates.models import Certificate
from apps.certificates.pdf_generator import generate_certificate_pdf

from .models import AdminActivityLog, PlatformSetting
from .permissions import IsAdminUserPermission, log_admin_activity
from .serializers import (
    AdminUserSerializer, AdminCourseSerializer, AdminModuleSerializer,
    AdminLessonSerializer, AdminCategorySerializer, AdminInstructorSerializer,
    AdminEnrollmentSerializer, AdminCertificateSerializer,
    AdminActivityLogSerializer, PlatformSettingSerializer
)


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            'current_page': self.page.number,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data
        })


# ==========================================
# 1. ADMIN AUTHENTICATION VIEWS
# ==========================================

class AdminAuthLoginAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email', '').strip()
        password = request.data.get('password', '').strip()

        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, email=email, password=password)

        if user is None:
            return Response({'error': 'Invalid administrator credentials.'}, status=status.HTTP_401_UNAUTHORIZED)

        if not user.is_active:
            return Response({'error': 'This administrator account has been deactivated.'}, status=status.HTTP_403_FORBIDDEN)

        is_admin = (
            getattr(user, 'role', None) == 'admin' or
            user.is_staff or
            user.is_superuser
        )

        if not is_admin:
            return Response({
                'error': 'Access denied: You do not have administrator permissions.'
            }, status=status.HTTP_403_FORBIDDEN)

        login(request, user)
        log_admin_activity(request, 'ADMIN_LOGIN', target_object=user.email, details='Successful admin login')

        return Response({
            'message': 'Admin login successful',
            'user': AdminUserSerializer(user).data
        }, status=status.HTTP_200_OK)


class AdminAuthLogoutAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def post(self, request):
        log_admin_activity(request, 'ADMIN_LOGOUT', target_object=request.user.email, details='Admin logout')
        logout(request)
        return Response({'message': 'Logged out successfully.'})


class AdminProfileAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        serializer = AdminUserSerializer(request.user)
        return Response(serializer.data)

    def put(self, request):
        user = request.user
        full_name = request.data.get('full_name', user.full_name)
        email = request.data.get('email', user.email)

        if email != user.email and User.objects.filter(email=email).exclude(id=user.id).exists():
            return Response({'error': 'Email is already in use by another account.'}, status=status.HTTP_400_BAD_REQUEST)

        user.full_name = full_name
        user.email = email
        user.save()

        profile, _ = UserProfile.objects.get_or_create(user=user)
        profile.phone = request.data.get('phone', profile.phone)
        profile.bio = request.data.get('bio', profile.bio)
        profile.designation = request.data.get('designation', profile.designation)
        profile.save()

        log_admin_activity(request, 'PROFILE_UPDATE', target_object=user.email, details='Updated admin profile details')
        return Response({'message': 'Profile updated successfully.', 'user': AdminUserSerializer(user).data})

    def post(self, request):
        # Change password endpoint
        user = request.user
        current_password = request.data.get('current_password')
        new_password = request.data.get('new_password')
        confirm_password = request.data.get('confirm_password')

        if not user.check_password(current_password):
            return Response({'error': 'Current password is incorrect.'}, status=status.HTTP_400_BAD_REQUEST)

        if not new_password or len(new_password) < 6:
            return Response({'error': 'New password must be at least 6 characters long.'}, status=status.HTTP_400_BAD_REQUEST)

        if new_password != confirm_password:
            return Response({'error': 'New passwords do not match.'}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()
        # Keep user logged in after password change
        login(request, user)
        log_admin_activity(request, 'PASSWORD_CHANGE', target_object=user.email, details='Changed admin password')
        return Response({'message': 'Password changed successfully.'})


# ==========================================
# 2. OVERVIEW & METRICS
# ==========================================

class AdminOverviewStatsAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        now = timezone.now()
        thirty_days_ago = now - timedelta(days=30)
        start_of_month = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
        start_of_year = now.replace(month=1, day=1, hour=0, minute=0, second=0, microsecond=0)

        total_users = User.objects.count()
        active_users = User.objects.filter(is_active=True).count()
        inactive_users = User.objects.filter(is_active=False).count()
        new_users_month = User.objects.filter(created_at__gte=start_of_month).count()

        total_courses = Course.objects.count()
        published_courses = Course.objects.filter(status='published').count()
        draft_courses = Course.objects.filter(status='draft').count()
        featured_courses = Course.objects.filter(is_featured=True).count()

        total_enrollments = Enrollment.objects.count()
        completed_enrollments = Enrollment.objects.filter(is_completed=True).count()
        in_progress_enrollments = Enrollment.objects.filter(is_completed=False).count()
        avg_progress = Enrollment.objects.aggregate(Avg('progress_percent'))['progress_percent__avg'] or 0.0

        total_certs = Certificate.objects.count()
        issued_this_month = Certificate.objects.filter(issue_date__gte=start_of_month, status='issued').count()
        issued_this_year = Certificate.objects.filter(issue_date__gte=start_of_year, status='issued').count()
        revoked_certs = Certificate.objects.filter(status='revoked').count()

        # Popular courses
        popular_courses = Course.objects.annotate(enc_count=Count('enrollments')).order_by('-enc_count')[:5]
        popular_courses_data = [
            {'title': c.title, 'code': c.course_code, 'enrollments': c.enc_count}
            for c in popular_courses
        ]

        # Recent activities
        recent_logs = AdminActivityLog.objects.all()[:5]

        return Response({
            'users': {
                'total': total_users,
                'active': active_users,
                'inactive': inactive_users,
                'new_this_month': new_users_month
            },
            'courses': {
                'total': total_courses,
                'published': published_courses,
                'draft': draft_courses,
                'featured': featured_courses
            },
            'learning': {
                'total_enrollments': total_enrollments,
                'completed': completed_enrollments,
                'in_progress': in_progress_enrollments,
                'avg_progress': round(float(avg_progress), 1)
            },
            'certificates': {
                'total': total_certs,
                'issued_this_month': issued_this_month,
                'issued_this_year': issued_this_year,
                'revoked': revoked_certs
            },
            'popular_courses': popular_courses_data,
            'recent_logs': AdminActivityLogSerializer(recent_logs, many=True).data
        })


# ==========================================
# 3. USER MANAGEMENT VIEWS
# ==========================================

class AdminUserListCreateAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        queryset = User.objects.all().order_by('-created_at')

        # Search query
        q = request.query_params.get('q', '').strip()
        if q:
            queryset = queryset.filter(
                Q(full_name__icontains=q) | Q(email__icontains=q)
            )

        # Role filter
        role = request.query_params.get('role')
        if role and role != 'all':
            queryset = queryset.filter(role=role)

        # Status filter
        status_param = request.query_params.get('status')
        if status_param == 'active':
            queryset = queryset.filter(is_active=True)
        elif status_param == 'inactive':
            queryset = queryset.filter(is_active=False)

        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(queryset, request)
        serializer = AdminUserSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request):
        email = request.data.get('email', '').strip()
        full_name = request.data.get('full_name', '').strip()
        password = request.data.get('password', '').strip()
        role = request.data.get('role', 'student')
        is_active = request.data.get('is_active', True)

        if not email or not full_name or not password:
            return Response({'error': 'Email, full name, and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'A user with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        is_staff = (role == 'admin')
        is_superuser = (role == 'admin')

        user = User.objects.create_user(
            email=email,
            password=password,
            full_name=full_name,
            role=role,
            is_active=is_active,
            is_staff=is_staff,
            is_superuser=is_superuser
        )

        UserProfile.objects.create(
            user=user,
            phone=request.data.get('phone', ''),
            bio=request.data.get('bio', ''),
            designation=request.data.get('designation', '')
        )

        log_admin_activity(request, 'USER_CREATE', target_object=user.email, details=f"Created user with role {role}")
        return Response(AdminUserSerializer(user).data, status=status.HTTP_201_CREATED)


class AdminUserDetailAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get_object(self, pk):
        return get_object_or_404(User, pk=pk)

    def get(self, request, pk):
        user = self.get_object(pk)
        data = AdminUserSerializer(user).data

        # Add user's enrollments & certificates details
        enrollments = Enrollment.objects.filter(user=user).select_related('course')
        certificates = Certificate.objects.filter(user=user).select_related('course')

        data['enrollments_detail'] = [
            {
                'id': e.id,
                'course_title': e.course.title,
                'course_code': e.course.course_code,
                'progress_percent': float(e.progress_percent),
                'is_completed': e.is_completed,
                'enrolled_at': e.enrolled_at
            } for e in enrollments
        ]

        data['certificates_detail'] = [
            {
                'id': c.id,
                'certificate_id': c.certificate_id,
                'course_title': c.course.title,
                'issue_date': c.issue_date,
                'status': c.status
            } for c in certificates
        ]

        return Response(data)

    def put(self, request, pk):
        user = self.get_object(pk)
        role = request.data.get('role', user.role)
        is_active = request.data.get('is_active', user.is_active)

        # Safety Check: Prevent deactivating or demoting the last active administrator!
        active_admins_count = User.objects.filter(
            Q(role='admin') | Q(is_staff=True) | Q(is_superuser=True),
            is_active=True
        ).count()

        is_current_user_admin = (user.role == 'admin' or user.is_staff or user.is_superuser) and user.is_active

        if is_current_user_admin and active_admins_count <= 1:
            if role != 'admin' or not is_active:
                return Response({
                    'error': 'Safety Protection: Cannot deactivate or demote the only active administrator in the system!'
                }, status=status.HTTP_400_BAD_REQUEST)

        user.full_name = request.data.get('full_name', user.full_name)
        user.email = request.data.get('email', user.email)
        user.role = role
        user.is_active = is_active

        if role == 'admin':
            user.is_staff = True
            user.is_superuser = True
        elif role in ['student', 'instructor']:
            user.is_staff = False
            user.is_superuser = False

        user.save()

        profile, _ = UserProfile.objects.get_or_create(user=user)
        if 'phone' in request.data: profile.phone = request.data['phone']
        if 'bio' in request.data: profile.bio = request.data['bio']
        if 'designation' in request.data: profile.designation = request.data['designation']
        profile.save()

        log_admin_activity(request, 'USER_UPDATE', target_object=user.email, details=f"Updated role to {role}, active={is_active}")
        return Response(AdminUserSerializer(user).data)

    def delete(self, request, pk):
        user = self.get_object(pk)

        # Protection check
        active_admins_count = User.objects.filter(
            Q(role='admin') | Q(is_staff=True) | Q(is_superuser=True),
            is_active=True
        ).count()

        is_current_user_admin = (user.role == 'admin' or user.is_staff or user.is_superuser) and user.is_active

        if is_current_user_admin and active_admins_count <= 1:
            return Response({
                'error': 'Safety Protection: Cannot delete the only active administrator in the system!'
            }, status=status.HTTP_400_BAD_REQUEST)

        user_email = user.email
        user.delete()
        log_admin_activity(request, 'USER_DELETE', target_object=user_email, details='Deleted user account')
        return Response({'message': f'User {user_email} deleted successfully.'})


class AdminUserResetPasswordAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def post(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        new_password = request.data.get('new_password')

        if not new_password or len(new_password) < 6:
            return Response({'error': 'Password must be at least 6 characters long.'}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()
        log_admin_activity(request, 'USER_RESET_PASSWORD', target_object=user.email, details='Reset user password')
        return Response({'message': f'Password for {user.email} reset successfully.'})


# ==========================================
# 4. COURSE MANAGEMENT VIEWS
# ==========================================

class AdminCourseListCreateAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        queryset = Course.objects.all().select_related('category', 'instructor').order_by('-created_at')

        q = request.query_params.get('q', '').strip()
        if q:
            queryset = queryset.filter(
                Q(title__icontains=q) | Q(course_code__icontains=q)
            )

        status_param = request.query_params.get('status')
        if status_param and status_param != 'all':
            queryset = queryset.filter(status=status_param)

        category_id = request.query_params.get('category')
        if category_id and category_id != 'all':
            queryset = queryset.filter(category_id=category_id)

        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(queryset, request)
        serializer = AdminCourseSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request):
        title = request.data.get('title', '').strip()
        course_code = request.data.get('course_code', '').strip().upper()
        category_id = request.data.get('category')
        instructor_id = request.data.get('instructor')

        if not title or not course_code or not category_id or not instructor_id:
            return Response({'error': 'Title, course code, category, and instructor are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if Course.objects.filter(course_code=course_code).exists():
            return Response({'error': f'Course code "{course_code}" is already in use.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = AdminCourseSerializer(data=request.data)
        if serializer.is_valid():
            course = serializer.save()
            log_admin_activity(request, 'COURSE_CREATE', target_object=course.title, details=f"Created course {course.course_code}")
            return Response(AdminCourseSerializer(course).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminCourseDetailAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get_object(self, pk):
        return get_object_or_404(Course, pk=pk)

    def get(self, request, pk):
        course = self.get_object(pk)
        serializer = AdminCourseSerializer(course)
        data = serializer.data

        # Include modules and lessons details
        modules = Module.objects.filter(course=course).prefetch_related('lessons').order_by('order')
        data['modules'] = AdminModuleSerializer(modules, many=True).data
        return Response(data)

    def put(self, request, pk):
        course = self.get_object(pk)
        serializer = AdminCourseSerializer(course, data=request.data, partial=True)
        if serializer.is_valid():
            updated_course = serializer.save()
            log_admin_activity(request, 'COURSE_UPDATE', target_object=updated_course.title, details='Updated course details')
            return Response(AdminCourseSerializer(updated_course).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        course = self.get_object(pk)
        enrollments_count = Enrollment.objects.filter(course=course).count()

        force = request.query_params.get('force') == 'true'

        if enrollments_count > 0 and not force:
            return Response({
                'error': f'Course "{course.title}" has {enrollments_count} active student enrollment(s). To delete, confirm force delete.',
                'enrollments_count': enrollments_count,
                'requires_confirmation': True
            }, status=status.HTTP_400_BAD_REQUEST)

        course_title = course.title
        course.delete()
        log_admin_activity(request, 'COURSE_DELETE', target_object=course_title, details=f'Deleted course (Enrollments was {enrollments_count})')
        return Response({'message': f'Course "{course_title}" deleted successfully.'})


class AdminCourseTogglePublishAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def post(self, request, pk):
        course = get_object_or_404(Course, pk=pk)
        course.status = 'published' if course.status == 'draft' else 'draft'
        course.save()
        log_admin_activity(request, 'COURSE_TOGGLE_PUBLISH', target_object=course.title, details=f"Status set to {course.status}")
        return Response({'message': f'Course status set to {course.status}.', 'status': course.status})


class AdminCourseToggleFeaturedAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def post(self, request, pk):
        course = get_object_or_404(Course, pk=pk)
        course.is_featured = not course.is_featured
        course.save()
        log_admin_activity(request, 'COURSE_TOGGLE_FEATURED', target_object=course.title, details=f"Is featured set to {course.is_featured}")
        return Response({'message': f'Featured status updated.', 'is_featured': course.is_featured})


# ==========================================
# 5. MODULE & LESSON MANAGEMENT VIEWS
# ==========================================

class AdminModuleListCreateAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def post(self, request):
        serializer = AdminModuleSerializer(data=request.data)
        if serializer.is_valid():
            module = serializer.save()
            log_admin_activity(request, 'MODULE_CREATE', target_object=module.title, details=f"Created module for course {module.course.title}")
            return Response(AdminModuleSerializer(module).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminModuleDetailAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get_object(self, pk):
        return get_object_or_404(Module, pk=pk)

    def put(self, request, pk):
        module = self.get_object(pk)
        serializer = AdminModuleSerializer(module, data=request.data, partial=True)
        if serializer.is_valid():
            updated = serializer.save()
            log_admin_activity(request, 'MODULE_UPDATE', target_object=updated.title, details='Updated module')
            return Response(AdminModuleSerializer(updated).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        module = self.get_object(pk)
        title = module.title
        module.delete()
        log_admin_activity(request, 'MODULE_DELETE', target_object=title, details='Deleted module')
        return Response({'message': f'Module "{title}" deleted successfully.'})


class AdminLessonListCreateAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def post(self, request):
        serializer = AdminLessonSerializer(data=request.data)
        if serializer.is_valid():
            lesson = serializer.save()
            log_admin_activity(request, 'LESSON_CREATE', target_object=lesson.title, details=f"Created lesson in module {lesson.module.title}")
            return Response(AdminLessonSerializer(lesson).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminLessonDetailAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get_object(self, pk):
        return get_object_or_404(Lesson, pk=pk)

    def put(self, request, pk):
        lesson = self.get_object(pk)
        serializer = AdminLessonSerializer(lesson, data=request.data, partial=True)
        if serializer.is_valid():
            updated = serializer.save()
            log_admin_activity(request, 'LESSON_UPDATE', target_object=updated.title, details='Updated lesson')
            return Response(AdminLessonSerializer(updated).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        lesson = self.get_object(pk)
        title = lesson.title
        lesson.delete()
        log_admin_activity(request, 'LESSON_DELETE', target_object=title, details='Deleted lesson')
        return Response({'message': f'Lesson "{title}" deleted successfully.'})


# ==========================================
# 6. CATEGORY MANAGEMENT VIEWS
# ==========================================

class AdminCategoryListCreateAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        categories = Category.objects.annotate(courses_count=Count('courses')).order_by('name')
        serializer = AdminCategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AdminCategorySerializer(data=request.data)
        if serializer.is_valid():
            category = serializer.save()
            log_admin_activity(request, 'CATEGORY_CREATE', target_object=category.name, details='Created category')
            return Response(AdminCategorySerializer(category).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminCategoryDetailAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get_object(self, pk):
        return get_object_or_404(Category, pk=pk)

    def put(self, request, pk):
        category = self.get_object(pk)
        serializer = AdminCategorySerializer(category, data=request.data, partial=True)
        if serializer.is_valid():
            updated = serializer.save()
            log_admin_activity(request, 'CATEGORY_UPDATE', target_object=updated.name, details='Updated category')
            return Response(AdminCategorySerializer(updated).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        category = self.get_object(pk)
        courses_count = category.courses.count()
        if courses_count > 0:
            return Response({
                'error': f'Cannot delete category "{category.name}" because it has {courses_count} associated course(s). Reassign or delete those courses first.'
            }, status=status.HTTP_400_BAD_REQUEST)

        name = category.name
        category.delete()
        log_admin_activity(request, 'CATEGORY_DELETE', target_object=name, details='Deleted category')
        return Response({'message': f'Category "{name}" deleted successfully.'})


# ==========================================
# 7. INSTRUCTOR MANAGEMENT VIEWS
# ==========================================

class AdminInstructorListCreateAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        instructors = Instructor.objects.annotate(courses_count=Count('courses')).order_by('name')
        serializer = AdminInstructorSerializer(instructors, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AdminInstructorSerializer(data=request.data)
        if serializer.is_valid():
            instructor = serializer.save()
            log_admin_activity(request, 'INSTRUCTOR_CREATE', target_object=instructor.name, details='Created instructor profile')
            return Response(AdminInstructorSerializer(instructor).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminInstructorDetailAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get_object(self, pk):
        return get_object_or_404(Instructor, pk=pk)

    def put(self, request, pk):
        instructor = self.get_object(pk)
        serializer = AdminInstructorSerializer(instructor, data=request.data, partial=True)
        if serializer.is_valid():
            updated = serializer.save()
            log_admin_activity(request, 'INSTRUCTOR_UPDATE', target_object=updated.name, details='Updated instructor profile')
            return Response(AdminInstructorSerializer(updated).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        instructor = self.get_object(pk)
        courses_count = instructor.courses.count()
        if courses_count > 0:
            return Response({
                'error': f'Cannot delete instructor "{instructor.name}" because they are assigned to {courses_count} course(s).'
            }, status=status.HTTP_400_BAD_REQUEST)

        name = instructor.name
        instructor.delete()
        log_admin_activity(request, 'INSTRUCTOR_DELETE', target_object=name, details='Deleted instructor profile')
        return Response({'message': f'Instructor "{name}" deleted successfully.'})


# ==========================================
# 8. ENROLLMENT MANAGEMENT VIEWS
# ==========================================

class AdminEnrollmentListCreateAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        queryset = Enrollment.objects.all().select_related('user', 'course').order_by('-enrolled_at')

        q = request.query_params.get('q', '').strip()
        if q:
            queryset = queryset.filter(
                Q(user__full_name__icontains=q) |
                Q(user__email__icontains=q) |
                Q(course__title__icontains=q) |
                Q(course__course_code__icontains=q)
            )

        course_id = request.query_params.get('course')
        if course_id and course_id != 'all':
            queryset = queryset.filter(course_id=course_id)

        completion_status = request.query_params.get('status')
        if completion_status == 'completed':
            queryset = queryset.filter(is_completed=True)
        elif completion_status == 'in_progress':
            queryset = queryset.filter(is_completed=False)

        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(queryset, request)
        serializer = AdminEnrollmentSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request):
        user_id = request.data.get('user_id')
        course_id = request.data.get('course_id')

        if not user_id or not course_id:
            return Response({'error': 'User ID and Course ID are required.'}, status=status.HTTP_400_BAD_REQUEST)

        user = get_object_or_404(User, pk=user_id)
        course = get_object_or_404(Course, pk=course_id)

        if Enrollment.objects.filter(user=user, course=course).exists():
            return Response({
                'error': f'Student {user.email} is already enrolled in "{course.title}".'
            }, status=status.HTTP_400_BAD_REQUEST)

        enrollment = Enrollment.objects.create(user=user, course=course)
        log_admin_activity(request, 'ENROLLMENT_CREATE', target_object=f"{user.email} -> {course.course_code}", details='Manually enrolled student')
        return Response(AdminEnrollmentSerializer(enrollment).data, status=status.HTTP_201_CREATED)


class AdminEnrollmentDetailAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def delete(self, request, pk):
        enrollment = get_object_or_404(Enrollment, pk=pk)
        info = f"{enrollment.user.email} in {enrollment.course.course_code}"
        enrollment.delete()
        log_admin_activity(request, 'ENROLLMENT_DELETE', target_object=info, details='Cancelled enrollment')
        return Response({'message': 'Enrollment cancelled successfully.'})


# ==========================================
# 9. CERTIFICATE MANAGEMENT VIEWS
# ==========================================

class AdminCertificateListCreateAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        queryset = Certificate.objects.all().select_related('user', 'course', 'enrollment').order_by('-issue_date')

        q = request.query_params.get('q', '').strip()
        if q:
            queryset = queryset.filter(
                Q(certificate_id__icontains=q) |
                Q(user__full_name__icontains=q) |
                Q(user__email__icontains=q) |
                Q(course__title__icontains=q)
            )

        status_param = request.query_params.get('status')
        if status_param and status_param != 'all':
            queryset = queryset.filter(status=status_param)

        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(queryset, request)
        serializer = AdminCertificateSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)


class AdminCertificateGenerateAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def post(self, request):
        enrollment_id = request.data.get('enrollment_id')
        force = request.data.get('force', False)

        if not enrollment_id:
            return Response({'error': 'Enrollment ID is required.'}, status=status.HTTP_400_BAD_REQUEST)

        enrollment = get_object_or_404(Enrollment, pk=enrollment_id)

        # Verify completion unless force override by admin
        if not enrollment.is_completed and not force:
            return Response({
                'error': f'Enrollment progress is only {enrollment.progress_percent}%. Course is not completed yet.'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Check existing certificate
        existing_cert = Certificate.objects.filter(enrollment=enrollment).first()
        if existing_cert:
            if existing_cert.status == 'revoked':
                existing_cert.status = 'issued'
                existing_cert.revoked_at = None
                existing_cert.revocation_reason = None
                existing_cert.save()
                log_admin_activity(request, 'CERTIFICATE_REISSUE', target_object=existing_cert.certificate_id, details='Re-issued previously revoked certificate')
                return Response(AdminCertificateSerializer(existing_cert).data)
            return Response({
                'message': 'Certificate already exists for this enrollment.',
                'certificate': AdminCertificateSerializer(existing_cert).data
            })

        cert = Certificate.objects.create(
            user=enrollment.user,
            course=enrollment.course,
            enrollment=enrollment,
            status='issued'
        )

        log_admin_activity(request, 'CERTIFICATE_GENERATE', target_object=cert.certificate_id, details=f"Generated certificate for {enrollment.user.email}")
        return Response(AdminCertificateSerializer(cert).data, status=status.HTTP_201_CREATED)


class AdminCertificateRevokeAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def post(self, request, pk):
        cert = get_object_or_404(Certificate, pk=pk)
        reason = request.data.get('reason', 'Revoked by system administrator').strip()

        cert.status = 'revoked'
        cert.revoked_at = timezone.now()
        cert.revocation_reason = reason
        cert.save()

        log_admin_activity(request, 'CERTIFICATE_REVOKE', target_object=cert.certificate_id, details=f"Reason: {reason}")
        return Response({
            'message': f'Certificate {cert.certificate_id} has been revoked.',
            'certificate': AdminCertificateSerializer(cert).data
        })


class AdminCertificateDownloadAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request, pk):
        cert = get_object_or_404(Certificate, pk=pk)

        if cert.status == 'revoked':
            return Response({'error': 'This certificate has been revoked and cannot be downloaded.'}, status=status.HTTP_400_BAD_REQUEST)

        pdf_bytes = generate_certificate_pdf(cert)
        response = HttpResponse(pdf_bytes, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="{cert.certificate_id}.pdf"'
        return response


# ==========================================
# 10. ANALYTICS API VIEW
# ==========================================

class AdminAnalyticsAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        period = request.query_params.get('period', '30days')
        now = timezone.now()

        if period == 'today':
            start_date = now.replace(hour=0, minute=0, second=0, microsecond=0)
        elif period == '7days':
            start_date = now - timedelta(days=7)
        elif period == 'this_month':
            start_date = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
        elif period == 'this_year':
            start_date = now.replace(month=1, day=1, hour=0, minute=0, second=0, microsecond=0)
        else:  # 30 days default
            start_date = now - timedelta(days=30)

        # Users analytics
        users_count = User.objects.filter(created_at__gte=start_date).count()
        roles_distribution = list(User.objects.values('role').annotate(count=Count('id')))

        # Enrollments analytics
        enrollments_count = Enrollment.objects.filter(enrolled_at__gte=start_date).count()
        completions_count = Enrollment.objects.filter(completed_at__gte=start_date, is_completed=True).count()

        # Certificates analytics
        certs_issued = Certificate.objects.filter(issue_date__gte=start_date, status='issued').count()
        certs_revoked = Certificate.objects.filter(revoked_at__gte=start_date, status='revoked').count()

        # Course Popularity
        course_popularity = list(
            Course.objects.annotate(enrollment_count=Count('enrollments'))
            .values('title', 'course_code', 'enrollment_count')
            .order_by('-enrollment_count')[:10]
        )

        # Course completion rates
        course_completion_rates = []
        for c in Course.objects.all()[:10]:
            total_enc = c.enrollments.count()
            comp_enc = c.enrollments.filter(is_completed=True).count()
            rate = round((comp_enc / total_enc * 100), 1) if total_enc > 0 else 0
            course_completion_rates.append({
                'title': c.title,
                'total_enrolled': total_enc,
                'completed': comp_enc,
                'rate': rate
            })

        return Response({
            'period': period,
            'summary': {
                'new_users': users_count,
                'new_enrollments': enrollments_count,
                'completions': completions_count,
                'certificates_issued': certs_issued,
                'certificates_revoked': certs_revoked
            },
            'roles_distribution': roles_distribution,
            'course_popularity': course_popularity,
            'course_completion_rates': course_completion_rates
        })


# ==========================================
# 11. ACTIVITY LOGS API VIEW
# ==========================================

class AdminActivityLogListAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        queryset = AdminActivityLog.objects.all().select_related('admin_user').order_by('-timestamp')

        q = request.query_params.get('q', '').strip()
        if q:
            queryset = queryset.filter(
                Q(action__icontains=q) |
                Q(target_object__icontains=q) |
                Q(admin_user__email__icontains=q) |
                Q(details__icontains=q)
            )

        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(queryset, request)
        serializer = AdminActivityLogSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)


# ==========================================
# 12. PLATFORM SETTINGS API VIEW
# ==========================================

class AdminPlatformSettingAPIView(APIView):
    permission_classes = [IsAdminUserPermission]

    def get(self, request):
        settings_qs = PlatformSetting.objects.all()
        # Seed default settings if empty
        defaults = [
            ('platform_name', 'Arshith Bootcamp LMS', 'Main application platform title'),
            ('contact_email', 'support@arshithbootcamp.com', 'Primary contact email address'),
            ('enable_registration', 'true', 'Allow public user self-registration'),
            ('default_page_size', '10', 'Default pagination size for admin lists'),
            ('certificate_prefix', 'SPRING-2026', 'Prefix for newly generated certificate IDs')
        ]
        for key, value, desc in defaults:
            PlatformSetting.objects.get_or_create(key=key, defaults={'value': value, 'description': desc})

        settings_qs = PlatformSetting.objects.all()
        serializer = PlatformSettingSerializer(settings_qs, many=True)
        return Response(serializer.data)

    def post(self, request):
        settings_data = request.data.get('settings', {})
        for key, val in settings_data.items():
            setting, _ = PlatformSetting.objects.get_or_create(key=key)
            setting.value = str(val)
            setting.save()

        log_admin_activity(request, 'SETTINGS_UPDATE', target_object='Platform Settings', details='Updated system configuration parameters')
        return Response({'message': 'Platform settings updated successfully.'})
