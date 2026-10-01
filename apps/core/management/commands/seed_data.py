from django.core.management.base import BaseCommand
from apps.accounts.models import User, UserProfile
from apps.courses.models import Category, Instructor, Course, Module, Lesson
from apps.learning.models import Enrollment, LessonProgress
from apps.certificates.models import Certificate
from django.utils import timezone

class Command(BaseCommand):
    help = 'Seeds exact 4 primary courses for Arshith Enterprise Platform'

    def handle(self, *args, **options):
        self.stdout.write("Seeding Arshith platform exact 4 courses...")

        # Clear existing courses/categories if resetting
        Course.objects.all().delete()
        Category.objects.all().delete()
        Instructor.objects.all().delete()

        admin, _ = User.objects.get_or_create(
            email='admin@arshith.com',
            defaults={'full_name': 'Arshith Admin', 'role': 'admin', 'is_staff': True, 'is_superuser': True}
        )
        admin.set_password('AdminPass123!')
        admin.save()

        student, _ = User.objects.get_or_create(
            email='student@arshith.com',
            defaults={'full_name': 'Alex Mercer', 'role': 'student'}
        )
        student.set_password('StudentPass123!')
        student.save()
        UserProfile.objects.get_or_create(user=student, defaults={'designation': 'Software Engineer'})

        # Categories
        cat_py = Category.objects.create(name='Python Development', icon='fa-code', description='Master Python full stack ecosystem.')
        cat_web = Category.objects.create(name='Web Development', icon='fa-laptop-code', description='Modern web development technologies.')
        cat_db = Category.objects.create(name='Databases & SQL', icon='fa-database', description='Enterprise database management systems and SQL query optimization.')
        cat_ai = Category.objects.create(name='AI & Data Science', icon='fa-brain', description='Artificial intelligence, machine learning, and data analytics.')

        # Instructors
        inst1 = Instructor.objects.create(name='Dr. Alan Turing', designation='Principal AI Scientist', bio='Specialist in AI, neural networks, and machine learning architectures.', experience_years=15)
        inst2 = Instructor.objects.create(name='Rajesh Kumar', designation='Senior Full-Stack Architect', bio='Expert in Python Django REST framework, Web development, and SQL databases.', experience_years=12)

        sample_video = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

        # 4 Specific Courses Requested by User Prompt & Reference UI
        courses_data = [
            {
                'code': 'PY-101',
                'title': 'Python Programming',
                'cat': cat_py,
                'inst': inst2,
                'diff': 'Beginner',
                'hours': 40.0,
                'rating': 4.8,
                'price': 999.00,
                'students_count': 12500,
                'is_bestseller': True,
                'short': 'Master Python programming from ground up with hands-on coding exercises, control flow, functions, OOP, and project building.',
                'thumb': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60',
                'modules': [
                    ('MODULE 01 — Python Basics', [('1. Python Setup & Hello World', 15), ('2. Variables & Data Types', 25), ('3. Operators & Expressions', 20)]),
                    ('MODULE 02 — Control Flow', [('1. Conditional Statements (if/else)', 25), ('2. Loops & Iteration (for/while)', 30)]),
                    ('MODULE 03 — Functions & Data Structures', [('1. Defining & Calling Functions', 30), ('2. Lists, Tuples, Dictionaries & Sets', 35)]),
                    ('MODULE 04 — Object-Oriented Programming', [('1. Classes & Objects', 35), ('2. Inheritance & Polymorphism', 40)]),
                    ('MODULE 05 — Real-World Capstone Projects', [('1. Building a CLI Automation Tool', 45), ('2. Final Project Assessment', 60)]),
                ]
            },
            {
                'code': 'WEB-101',
                'title': 'Web Development',
                'cat': cat_web,
                'inst': inst2,
                'diff': 'Beginner',
                'hours': 50.0,
                'rating': 4.9,
                'price': 1499.00,
                'students_count': 10200,
                'is_bestseller': False,
                'short': 'Complete modern web development guide covering HTML5, CSS3, Flexbox/Grid, JavaScript ES6+, DOM manipulation, and responsive web design.',
                'thumb': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60',
                'modules': [
                    ('MODULE 01 — HTML5 Fundamentals', [('1. HTML Tags & Structural Elements', 20), ('2. Forms, Inputs & Accessibility', 25)]),
                    ('MODULE 02 — CSS3 & Responsive Design', [('1. CSS Styling & Box Model', 30), ('2. Flexbox & Grid Systems', 35)]),
                    ('MODULE 03 — Modern JavaScript ES6+', [('1. Variables, Arrow Functions & DOM', 35), ('2. Async JS & Fetching APIs', 40)]),
                ]
            },
            {
                'code': 'SQL-101',
                'title': 'SQL for Data Analysis',
                'cat': cat_db,
                'inst': inst2,
                'diff': 'Beginner',
                'hours': 20.0,
                'rating': 4.8,
                'price': 0.00,
                'students_count': 8700,
                'is_bestseller': False,
                'short': 'Learn relational database querying with SQL. Master SELECT statements, filtering, INNER/LEFT JOINs, subqueries, group by, and data analysis.',
                'thumb': 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=60',
                'modules': [
                    ('MODULE 01 — Relational Databases & SQL Syntax', [('1. Intro to Relational Databases', 15), ('2. Basic SELECT & WHERE Clause', 25)]),
                    ('MODULE 02 — Joins & Data Aggregation', [('1. INNER & LEFT JOINs Explained', 30), ('2. GROUP BY & Aggregate Functions', 35)]),
                    ('MODULE 03 — Advanced SQL & Data Insights', [('1. Subqueries & Window Functions', 35), ('2. Real-World Business Analytics', 40)]),
                ]
            },
            {
                'code': 'DS-101',
                'title': 'Data Science with Python',
                'cat': cat_ai,
                'inst': inst1,
                'diff': 'Intermediate',
                'hours': 60.0,
                'rating': 4.9,
                'price': 2499.00,
                'students_count': 6300,
                'is_bestseller': False,
                'short': 'Unlock Data Science & Machine Learning pipelines using Python, NumPy, Pandas, Matplotlib, Scikit-Learn, and statistical modeling.',
                'thumb': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=60',
                'modules': [
                    ('MODULE 01 — Data Cleaning & Manipulation', [('1. NumPy Arrays & Vectorization', 30), ('2. Data Wrangling with Pandas', 40)]),
                    ('MODULE 02 — Exploratory Data Analysis & Viz', [('1. Data Viz with Matplotlib & Seaborn', 35), ('2. Feature Engineering & Scaling', 40)]),
                    ('MODULE 03 — Machine Learning Algorithms', [('1. Supervised Learning & Regression', 45), ('2. Classification & Model Evaluation', 50)]),
                ]
            }
        ]

        for cdata in courses_data:
            course = Course.objects.create(
                course_code=cdata['code'],
                title=cdata['title'],
                category=cdata['cat'],
                instructor=cdata['inst'],
                difficulty=cdata['diff'],
                duration_hours=cdata['hours'],
                rating=cdata['rating'],
                price=cdata['price'],
                students_count=cdata['students_count'],
                is_bestseller=cdata['is_bestseller'],
                short_description=cdata['short'],
                description=f"{cdata['short']} Practical courses taught by industry experts. Learn at your own pace and earn certificates.",
                thumbnail_url=cdata['thumb'],
                is_featured=True,
                requirements='• Basic computer literacy\n• Dedication to complete video lessons and hands-on projects.',
                learning_objectives=f"• Master {cdata['title']} skills for career growth.\n• Build portfolio projects.\n• Earn an official verified completion certificate.",
                status='published'
            )

            for m_idx, (m_title, lessons_list) in enumerate(cdata['modules'], start=1):
                mod = Module.objects.create(course=course, title=m_title, order=m_idx)
                for l_idx, (l_title, l_dur) in enumerate(lessons_list, start=1):
                    Lesson.objects.create(
                        module=mod,
                        title=l_title,
                        duration_minutes=l_dur,
                        video_url=sample_video,
                        order=l_idx,
                        is_free_preview=(m_idx == 1 and l_idx == 1),
                        is_published=True,
                        content_html=f"<h3>Lesson Overview: {l_title}</h3><p>Welcome to <strong>{l_title}</strong> in the {cdata['title']} course track by ArshithGroup.</p><p>Watch the video lesson above and complete the accompanying exercise to track your progress.</p>"
                    )

        # Sample Enrollments for Demo Student
        py_course = Course.objects.get(course_code='PY-101')
        web_course = Course.objects.get(course_code='WEB-101')
        sql_course = Course.objects.get(course_code='SQL-101')
        ds_course = Course.objects.get(course_code='DS-101')

        # Python Programming -> Completed 100% -> Certificate
        en_py, _ = Enrollment.objects.get_or_create(
            user=student,
            course=py_course,
            defaults={'progress_percent': 100.0, 'is_completed': True, 'completed_at': timezone.now()}
        )
        for les in Lesson.objects.filter(module__course=py_course):
            LessonProgress.objects.get_or_create(enrollment=en_py, lesson=les, defaults={'completed': True, 'completed_at': timezone.now()})
        en_py.update_progress()
        Certificate.objects.get_or_create(user=student, course=py_course, enrollment=en_py)

        # Web Development -> 32% Progress
        en_web, _ = Enrollment.objects.get_or_create(
            user=student,
            course=web_course,
            defaults={'progress_percent': 32.0, 'is_completed': False}
        )
        web_lessons = list(Lesson.objects.filter(module__course=web_course))
        if web_lessons:
            LessonProgress.objects.get_or_create(enrollment=en_web, lesson=web_lessons[0], defaults={'completed': True, 'completed_at': timezone.now()})
            en_web.update_progress()

        # SQL -> 45% Progress
        en_sql, _ = Enrollment.objects.get_or_create(
            user=student,
            course=sql_course,
            defaults={'progress_percent': 45.0, 'is_completed': False}
        )
        sql_lessons = list(Lesson.objects.filter(module__course=sql_course))
        if sql_lessons:
            LessonProgress.objects.get_or_create(enrollment=en_sql, lesson=sql_lessons[0], defaults={'completed': True, 'completed_at': timezone.now()})
            en_sql.update_progress()

        # Data Science -> 15% Progress
        en_ds, _ = Enrollment.objects.get_or_create(
            user=student,
            course=ds_course,
            defaults={'progress_percent': 15.0, 'is_completed': False}
        )

        self.stdout.write(self.style.SUCCESS("ArshithGroup exact 4 courses seeded successfully!"))

