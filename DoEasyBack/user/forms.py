from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.forms import fields
from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    """This form to creacte user"""
    class Meta:
        model = CustomUser
        fields = "__all__"


class CustomUserChangeForm(UserChangeForm):
    """This form to auth user"""
    class Meta:
        model: CustomUser
        fields = CustomUserCreationForm.Meta.fields        

