import os
from django.core.management.base import BaseCommand
from apps.accounts.models import User, UserProfile

class Command(BaseCommand):
    help = "Creates or updates an initial administrator account using environment variables or defaults."

    def handle(self, *args, **options):
        email = os.environ.get('ADMIN_EMAIL', 'admin@arshithbootcamp.com')
        password = os.environ.get('ADMIN_PASSWORD', 'AdminPass123!')
        full_name = os.environ.get('ADMIN_NAME', 'System Administrator')

        user, created = User.objects.get_or_create(
            email=email,
            defaults={
                'full_name': full_name,
                'role': 'admin',
                'is_staff': True,
                'is_superuser': True,
                'is_active': True
            }
        )

        user.set_password(password)
        user.role = 'admin'
        user.is_staff = True
        user.is_superuser = True
        user.is_active = True
        user.save()

        UserProfile.objects.get_or_create(user=user)

        if created:
            self.stdout.write(self.style.SUCCESS(f"Successfully created admin account: {email}"))
        else:
            self.stdout.write(self.style.SUCCESS(f"Successfully updated admin account: {email}"))
