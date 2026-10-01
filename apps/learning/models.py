from django.db import models
from django.conf import settings
from apps.courses.models import Course, Lesson
from django.utils import timezone

class Enrollment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='enrollments')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrollments')
    enrolled_at = models.DateTimeField(auto_now_add=True)
    progress_percent = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    is_completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(blank=True, null=True)
    last_accessed_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ['user', 'course']

    def update_progress(self):
        total_lessons = Lesson.objects.filter(module__course=self.course, is_published=True).count()
        if total_lessons == 0:
            self.progress_percent = 100.00
            self.is_completed = True
        else:
            completed_count = LessonProgress.objects.filter(enrollment=self, completed=True).count()
            self.progress_percent = round((completed_count / total_lessons) * 100, 2)
            if self.progress_percent >= 100.0:
                self.is_completed = True
                if not self.completed_at:
                    self.completed_at = timezone.now()
        self.save()
        return self.progress_percent

class LessonProgress(models.Model):
    enrollment = models.ForeignKey(Enrollment, on_delete=models.CASCADE, related_name='lesson_progresses')
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='user_progresses')
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        unique_together = ['enrollment', 'lesson']
