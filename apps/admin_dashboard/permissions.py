from rest_framework.permissions import BasePermission
from django.shortcuts import redirect
from functools import wraps
from .models import AdminActivityLog

class IsAdminUserPermission(BasePermission):
    """
    DRF Permission class: Allows access only to authenticated users with role=='admin', is_staff==True, or is_superuser==True.
    """
    def has_permission(self, request, view):
        return bool(
            request.user and
            request.user.is_authenticated and
            (getattr(request.user, 'role', None) == 'admin' or request.user.is_staff or request.user.is_superuser)
        )

def admin_required(view_func):
    """
    Django view decorator: Ensures the user is logged in AND is an admin/staff/superuser.
    Redirects non-admins to /admin-login/.
    """
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect(f'/admin-login/?next={request.path}')
        is_admin = (
            getattr(request.user, 'role', None) == 'admin' or
            request.user.is_staff or
            request.user.is_superuser
        )
        if not is_admin:
            return redirect('/admin-login/?error=unauthorized')
        return view_func(request, *args, **kwargs)
    return _wrapped_view

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        return x_forwarded_for.split(',')[0].strip()
    return request.META.get('REMOTE_ADDR')

def log_admin_activity(request, action, target_object="", details=""):
    user = request.user if request and request.user.is_authenticated else None
    ip = get_client_ip(request) if request else None
    try:
        AdminActivityLog.objects.create(
            admin_user=user,
            action=action,
            target_object=str(target_object),
            ip_address=ip,
            details=str(details)
        )
    except Exception as e:
        print(f"Failed to record admin activity log: {e}")
