from django.urls import path
from .views import (
    AdminAuthLoginAPIView, AdminAuthLogoutAPIView, AdminProfileAPIView,
    AdminOverviewStatsAPIView, AdminUserListCreateAPIView, AdminUserDetailAPIView,
    AdminUserResetPasswordAPIView, AdminCourseListCreateAPIView, AdminCourseDetailAPIView,
    AdminCourseTogglePublishAPIView, AdminCourseToggleFeaturedAPIView,
    AdminModuleListCreateAPIView, AdminModuleDetailAPIView,
    AdminLessonListCreateAPIView, AdminLessonDetailAPIView,
    AdminCategoryListCreateAPIView, AdminCategoryDetailAPIView,
    AdminInstructorListCreateAPIView, AdminInstructorDetailAPIView,
    AdminEnrollmentListCreateAPIView, AdminEnrollmentDetailAPIView,
    AdminCertificateListCreateAPIView, AdminCertificateGenerateAPIView,
    AdminCertificateRevokeAPIView, AdminCertificateDownloadAPIView,
    AdminAnalyticsAPIView, AdminActivityLogListAPIView, AdminPlatformSettingAPIView
)

urlpatterns = [
    # Admin Auth APIs
    path('admin/auth/login', AdminAuthLoginAPIView.as_view(), name='api-admin-login'),
    path('admin/auth/logout', AdminAuthLogoutAPIView.as_view(), name='api-admin-logout'),
    path('admin/profile', AdminProfileAPIView.as_view(), name='api-admin-profile'),

    # Overview Metrics API
    path('admin/stats', AdminOverviewStatsAPIView.as_view(), name='api-admin-stats'),
    path('admin/overview', AdminOverviewStatsAPIView.as_view(), name='api-admin-overview'),

    # Users APIs
    path('admin/users/', AdminUserListCreateAPIView.as_view(), name='api-admin-users'),
    path('admin/users/<int:pk>/', AdminUserDetailAPIView.as_view(), name='api-admin-user-detail'),
    path('admin/users/<int:pk>/reset-password/', AdminUserResetPasswordAPIView.as_view(), name='api-admin-user-reset-password'),

    # Courses APIs
    path('admin/courses/', AdminCourseListCreateAPIView.as_view(), name='api-admin-courses'),
    path('admin/courses/<int:pk>/', AdminCourseDetailAPIView.as_view(), name='api-admin-course-detail'),
    path('admin/courses/<int:pk>/toggle-publish/', AdminCourseTogglePublishAPIView.as_view(), name='api-admin-course-toggle-publish'),
    path('admin/courses/<int:pk>/toggle-featured/', AdminCourseToggleFeaturedAPIView.as_view(), name='api-admin-course-toggle-featured'),

    # Modules & Lessons APIs
    path('admin/modules/', AdminModuleListCreateAPIView.as_view(), name='api-admin-modules'),
    path('admin/modules/<int:pk>/', AdminModuleDetailAPIView.as_view(), name='api-admin-module-detail'),
    path('admin/lessons/', AdminLessonListCreateAPIView.as_view(), name='api-admin-lessons'),
    path('admin/lessons/<int:pk>/', AdminLessonDetailAPIView.as_view(), name='api-admin-lesson-detail'),

    # Categories APIs
    path('admin/categories/', AdminCategoryListCreateAPIView.as_view(), name='api-admin-categories'),
    path('admin/categories/<int:pk>/', AdminCategoryDetailAPIView.as_view(), name='api-admin-category-detail'),

    # Instructors APIs
    path('admin/instructors/', AdminInstructorListCreateAPIView.as_view(), name='api-admin-instructors'),
    path('admin/instructors/<int:pk>/', AdminInstructorDetailAPIView.as_view(), name='api-admin-instructor-detail'),

    # Enrollments APIs
    path('admin/enrollments/', AdminEnrollmentListCreateAPIView.as_view(), name='api-admin-enrollments'),
    path('admin/enrollments/<int:pk>/', AdminEnrollmentDetailAPIView.as_view(), name='api-admin-enrollment-detail'),

    # Certificates APIs
    path('admin/certificates/', AdminCertificateListCreateAPIView.as_view(), name='api-admin-certificates'),
    path('admin/certificates/generate/', AdminCertificateGenerateAPIView.as_view(), name='api-admin-certificate-generate'),
    path('admin/certificates/<int:pk>/revoke/', AdminCertificateRevokeAPIView.as_view(), name='api-admin-certificate-revoke'),
    path('admin/certificates/<int:pk>/download/', AdminCertificateDownloadAPIView.as_view(), name='api-admin-certificate-download'),

    # Analytics API
    path('admin/analytics/', AdminAnalyticsAPIView.as_view(), name='api-admin-analytics'),

    # Activity Logs API
    path('admin/activity-logs/', AdminActivityLogListAPIView.as_view(), name='api-admin-activity-logs'),

    # Settings API
    path('admin/settings/', AdminPlatformSettingAPIView.as_view(), name='api-admin-settings'),
]
