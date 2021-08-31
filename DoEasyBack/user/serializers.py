from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import CustomUser
from rest_auth.registration.serializers import RegisterSerializer

class UserSerializer(ModelSerializer):
    """This serializer for model User"""
    class Meta:
        model = CustomUser
        fields = ('username','email','first_name','last_name')



class CustomUserRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField(max_length = 30)
    last_name = serializers.CharField(max_length = 30)
    birh_date = serializers.DateField()

    def save(self, request):
        user = super().save(request)
        user.first_name = self.data.get('first_name')
        user.last_name = self.data.get('last_name')
        user.save()
        return user
