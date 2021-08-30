from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    """This form to creacte user"""
    class Meta:
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email','birh_date')


class CustomUserChangeForm(UserChangeForm):
    """This form to auth user"""
    class Meta:
        model: CustomUser
        fields = CustomUserCreationForm.Meta.fields        

