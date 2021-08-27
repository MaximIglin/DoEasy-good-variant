from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.base import Model



class CustomUser(AbstractUser):
    """This model is describe users in our app"""
    def __str__(self):
        return self.email
