from django.db import models
from django.conf import settings

class AdminActivityLog(models.Model):
    admin_user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='admin_activities'
    )
    action = models.CharField(max_length=100)
    target_object = models.CharField(max_length=255, blank=True, null=True)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    details = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        user_str = self.admin_user.email if self.admin_user else "System"
        return f"[{self.timestamp.strftime('%Y-%m-%d %H:%M')}] {user_str}: {self.action} - {self.target_object or ''}"


class PlatformSetting(models.Model):
    key = models.CharField(max_length=100, unique=True)
    value = models.TextField()
    description = models.CharField(max_length=255, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.key} = {self.value}"
