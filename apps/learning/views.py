from rest_framework import status, permissions, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Enrollment, LessonProgress
from .serializers import EnrollmentSerializer, CoursePlayerSerializer
from apps.courses.models import Course, Lesson

class EnrollCourseAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, course_id):
        course = get_object_or_404(Course, id=course_id)
        enrollment, created = Enrollment.objects.get_or_create(user=request.user, course=course)
        return Response({'message': 'Enrolled successfully', 'enrollment_id': enrollment.id})

class MyCoursesAPIView(generics.ListAPIView):
    serializer_class = EnrollmentSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        return Enrollment.objects.filter(user=self.request.user)

class CoursePlayerAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, course_id):
        enrollment = get_object_or_404(Enrollment, user=request.user, course_id=course_id)
        return Response(CoursePlayerSerializer(enrollment).data)

class CompleteLessonAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, lesson_id):
        lesson = get_object_or_404(Lesson, id=lesson_id)
        enrollment = get_object_or_404(Enrollment, user=request.user, course=lesson.module.course)
        progress, _ = LessonProgress.objects.get_or_create(enrollment=enrollment, lesson=lesson)
        progress.completed = request.data.get('completed', True)
        progress.save()
        new_progress = enrollment.update_progress()
        return Response({'message': 'Lesson status updated', 'progress_percent': new_progress})
