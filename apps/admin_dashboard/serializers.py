from rest_framework import serializers
from apps.accounts.models import User, UserProfile
from apps.courses.models import Course, Category, Instructor, Module, Lesson
from apps.learning.models import Enrollment, LessonProgress
from apps.certificates.models import Certificate
from .models import AdminActivityLog, PlatformSetting

class AdminUserSerializer(serializers.ModelSerializer):
    phone = serializers.CharField(source='profile.phone', required=False, allow_blank=True)
    bio = serializers.CharField(source='profile.bio', required=False, allow_blank=True)
    designation = serializers.CharField(source='profile.designation', required=False, allow_blank=True)
    enrollments_count = serializers.SerializerMethodField()
    certificates_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id', 'email', 'full_name', 'role', 'is_active',
            'is_staff', 'is_superuser', 'phone', 'bio', 'designation',
            'created_at', 'updated_at', 'last_login',
            'enrollments_count', 'certificates_count'
        ]

    def get_enrollments_count(self, obj):
        return getattr(obj, 'enrollments_count', obj.enrollments.count())

    def get_certificates_count(self, obj):
        return getattr(obj, 'certificates_count', obj.certificates.count())


class AdminCategorySerializer(serializers.ModelSerializer):
    courses_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'icon', 'courses_count']

    def get_courses_count(self, obj):
        return getattr(obj, 'courses_count', obj.courses.count())


class AdminInstructorSerializer(serializers.ModelSerializer):
    courses_count = serializers.SerializerMethodField()

    class Meta:
        model = Instructor
        fields = ['id', 'name', 'designation', 'bio', 'experience_years', 'courses_count']

    def get_courses_count(self, obj):
        return getattr(obj, 'courses_count', obj.courses.count())


class AdminLessonSerializer(serializers.ModelSerializer):
    module_title = serializers.CharField(source='module.title', read_only=True)

    class Meta:
        model = Lesson
        fields = [
            'id', 'module', 'module_title', 'title', 'description',
            'content_html', 'video_url', 'duration_minutes', 'order',
            'is_free_preview', 'is_published'
        ]


class AdminModuleSerializer(serializers.ModelSerializer):
    lessons = AdminLessonSerializer(many=True, read_only=True)
    lessons_count = serializers.SerializerMethodField()

    class Meta:
        model = Module
        fields = ['id', 'course', 'title', 'description', 'order', 'lessons', 'lessons_count']

    def get_lessons_count(self, obj):
        return obj.lessons.count()


class AdminCourseSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    instructor_name = serializers.CharField(source='instructor.name', read_only=True)
    modules_count = serializers.SerializerMethodField()
    enrollments_count = serializers.SerializerMethodField()

    slug = serializers.CharField(read_only=True)
    description = serializers.CharField(required=False, allow_blank=True)
    short_description = serializers.CharField(required=False, allow_blank=True)
    thumbnail_url = serializers.CharField(required=False, allow_blank=True, allow_null=True)
    requirements = serializers.CharField(required=False, allow_blank=True, allow_null=True)
    learning_objectives = serializers.CharField(required=False, allow_blank=True, allow_null=True)

    class Meta:
        model = Course
        fields = [
            'id', 'title', 'course_code', 'slug', 'short_description', 'description',
            'thumbnail_url', 'category', 'category_name', 'instructor', 'instructor_name',
            'difficulty', 'duration_hours', 'rating', 'requirements', 'learning_objectives',
            'status', 'is_featured', 'created_at', 'modules_count', 'enrollments_count'
        ]

    def get_modules_count(self, obj):
        return getattr(obj, 'modules_count', obj.modules.count())

    def get_enrollments_count(self, obj):
        return getattr(obj, 'enrollments_count', obj.enrollments.count())

    def create(self, validated_data):
        from django.utils.text import slugify
        title = validated_data.get('title', '')
        base_slug = slugify(title) or 'course'
        slug = base_slug
        count = 1
        while Course.objects.filter(slug=slug).exists():
            slug = f"{base_slug}-{count}"
            count += 1
        validated_data['slug'] = slug

        if not validated_data.get('thumbnail_url'):
            validated_data['thumbnail_url'] = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60'
        if not validated_data.get('description'):
            validated_data['description'] = validated_data.get('short_description') or f"Comprehensive enterprise course on {title}."
        if not validated_data.get('short_description'):
            validated_data['short_description'] = f"Master {title} with hands-on enterprise labs and real-world projects."

        return super().create(validated_data)

    def update(self, instance, validated_data):
        from django.utils.text import slugify
        if 'title' in validated_data and validated_data['title'] != instance.title:
            base_slug = slugify(validated_data['title']) or 'course'
            slug = base_slug
            count = 1
            while Course.objects.filter(slug=slug).exclude(id=instance.id).exists():
                slug = f"{base_slug}-{count}"
                count += 1
            validated_data['slug'] = slug
        return super().update(instance, validated_data)



class AdminEnrollmentSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='user.full_name', read_only=True)
    student_email = serializers.CharField(source='user.email', read_only=True)
    course_title = serializers.CharField(source='course.title', read_only=True)
    course_code = serializers.CharField(source='course.course_code', read_only=True)
    has_certificate = serializers.SerializerMethodField()

    class Meta:
        model = Enrollment
        fields = [
            'id', 'user', 'course', 'student_name', 'student_email',
            'course_title', 'course_code', 'enrolled_at', 'progress_percent',
            'is_completed', 'completed_at', 'last_accessed_at', 'has_certificate'
        ]

    def get_has_certificate(self, obj):
        return hasattr(obj, 'certificate') and obj.certificate is not None


class AdminCertificateSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='user.full_name', read_only=True)
    student_email = serializers.CharField(source='user.email', read_only=True)
    course_title = serializers.CharField(source='course.title', read_only=True)
    course_code = serializers.CharField(source='course.course_code', read_only=True)

    class Meta:
        model = Certificate
        fields = [
            'id', 'certificate_id', 'user', 'course', 'enrollment',
            'student_name', 'student_email', 'course_title', 'course_code',
            'issue_date', 'status', 'revoked_at', 'revocation_reason'
        ]


class AdminActivityLogSerializer(serializers.ModelSerializer):
    admin_email = serializers.SerializerMethodField()

    class Meta:
        model = AdminActivityLog
        fields = ['id', 'admin_user', 'admin_email', 'action', 'target_object', 'ip_address', 'details', 'timestamp']

    def get_admin_email(self, obj):
        return obj.admin_user.email if obj.admin_user else 'System'


class PlatformSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlatformSetting
        fields = ['id', 'key', 'value', 'description', 'updated_at']
