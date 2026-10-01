from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from apps.courses.models import Course, Category, Instructor
from apps.learning.models import Enrollment
from apps.certificates.models import Certificate

from apps.admin_dashboard.permissions import admin_required

def home_view(request):
    categories = Category.objects.all()
    featured_courses = Course.objects.filter(status='published').select_related('category', 'instructor').order_by('id')
    trending_courses = Course.objects.filter(status='published').order_by('-rating')[:6]
    return render(request, 'public/home.html', {
        'categories': categories,
        'featured_courses': featured_courses,
        'trending_courses': trending_courses
    })

def courses_view(request):
    categories = Category.objects.all()
    instructors = Instructor.objects.all()
    
    courses = Course.objects.filter(status='published').select_related('category', 'instructor')

    # Search filter
    q = request.GET.get('q', '').strip()
    if q:
        courses = courses.filter(title__icontains=q) | courses.filter(short_description__icontains=q)

    # Category filter
    category_slug = request.GET.get('category', '').strip()
    if category_slug:
        courses = courses.filter(category__slug=category_slug)

    # Level filter
    level = request.GET.get('level', '').strip()
    if level:
        courses = courses.filter(difficulty__iexact=level)

    # Price filter
    price_type = request.GET.get('price', '').strip()
    if price_type == 'free':
        courses = courses.filter(price=0)
    elif price_type == 'paid':
        courses = courses.filter(price__gt=0)

    # Sort
    sort_by = request.GET.get('sort', 'popular').strip()
    if sort_by == 'newest':
        courses = courses.order_by('-created_at')
    elif sort_by == 'rating':
        courses = courses.order_by('-rating')
    elif sort_by == 'price_low':
        courses = courses.order_by('price')
    elif sort_by == 'price_high':
        courses = courses.order_by('-price')
    else:
        courses = courses.order_by('-students_count', '-rating')

    return render(request, 'public/courses.html', {
        'courses': courses,
        'categories': categories,
        'instructors': instructors,
        'selected_q': q,
        'selected_category': category_slug,
        'selected_level': level,
        'selected_price': price_type,
        'selected_sort': sort_by,
    })

def course_detail_view(request, slug_or_id):
    if str(slug_or_id).isdigit():
        course = get_object_or_404(Course, id=int(slug_or_id))
    else:
        course = get_object_or_404(Course, slug=slug_or_id)

    is_enrolled = False
    if request.user.is_authenticated:
        is_enrolled = Enrollment.objects.filter(user=request.user, course=course).exists()

    return render(request, 'public/course_detail.html', {
        'course': course,
        'is_enrolled': is_enrolled
    })

def login_view(request):
    if request.user.is_authenticated:
        return redirect('/dashboard/')
    return render(request, 'public/login.html')

def register_view(request):
    if request.user.is_authenticated:
        return redirect('/dashboard/')
    return render(request, 'public/register.html')

def admin_login_view(request):
    if request.user.is_authenticated:
        is_admin = getattr(request.user, 'role', None) == 'admin' or request.user.is_staff or request.user.is_superuser
        if is_admin:
            return redirect('/admin-dashboard/')
        else:
            return redirect('/dashboard/')
    return render(request, 'admin_portal/login.html')

def about_view(request):
    return render(request, 'public/about.html')

def contact_view(request):
    return render(request, 'public/contact.html')

def privacy_view(request):
    return render(request, 'public/privacy.html')

def terms_view(request):
    return render(request, 'public/terms.html')

@login_required
def user_dashboard_view(request):
    enrollments = Enrollment.objects.filter(user=request.user).order_by('-last_accessed_at')
    completed_count = enrollments.filter(is_completed=True).count()
    certificates = Certificate.objects.filter(user=request.user)
    all_courses = Course.objects.filter(status='published').select_related('category', 'instructor').order_by('-created_at')
    return render(request, 'dashboard/user_dashboard.html', {
        'enrollments': enrollments[:4],
        'total_enrolled': enrollments.count(),
        'completed_count': completed_count,
        'certificates_count': certificates.count(),
        'all_courses': all_courses
    })

@login_required
def my_courses_view(request):
    return render(request, 'dashboard/my_courses.html')

@login_required
def course_player_view(request, course_id):
    course = get_object_or_404(Course, id=course_id)
    enrollment = get_object_or_404(Enrollment, user=request.user, course=course)
    return render(request, 'dashboard/player.html', {'course': course, 'enrollment': enrollment})

@login_required
def certificates_view(request):
    certificates = Certificate.objects.filter(user=request.user)
    return render(request, 'dashboard/certificates.html', {'certificates': certificates})

def verify_certificate_view(request, certificate_id):
    cert = Certificate.objects.filter(certificate_id=certificate_id).first()
    return render(request, 'dashboard/verify_certificate.html', {'certificate': cert, 'certificate_id': certificate_id})

@admin_required
def admin_dashboard_view(request):
    return render(request, 'admin_portal/dashboard.html')

