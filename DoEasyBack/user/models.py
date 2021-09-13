from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.base import Model


class CustomUser(AbstractUser):
    """This model is describe users in our app"""
    first_name = models.CharField("Имя", max_length=30,default = None, null=True, blank=True)
    last_name = models.CharField("Фамилия", max_length=30,default = None, null=True, blank = True)
    birh_date = models.DateField("Дата Рождения", default = None, null=True, blank = True)
    def __str__(self):
        return self.email
