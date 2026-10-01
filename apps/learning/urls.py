from django.urls import path
from .views import EnrollCourseAPIView, MyCoursesAPIView, CoursePlayerAPIView, CompleteLessonAPIView

urlpatterns = [
    path('courses/<int:course_id>/enroll', EnrollCourseAPIView.as_view(), name='api-enroll'),
    path('my-courses', MyCoursesAPIView.as_view(), name='api-my-courses'),
    path('player/<int:course_id>', CoursePlayerAPIView.as_view(), name='api-player'),
    path('lessons/<int:lesson_id>/complete', CompleteLessonAPIView.as_view(), name='api-complete'),
]
