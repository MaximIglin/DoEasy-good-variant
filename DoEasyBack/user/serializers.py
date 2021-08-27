from rest_framework.fields import Field
from rest_framework.serializers import ModelSerializer
from .models import CustomUser


class UserSerializer(ModelSerializer):
    """This serializer for model User"""
    class Meta:
        model = CustomUser
        fields = "__all__"