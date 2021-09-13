from rest_framework import serializers

from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    """This serializer for Review-model"""
    class Meta:
        model = Review
        fields = "__all__"


class ReviewDetailSerializer(serializers.ModelSerializer):
    """This serializer for detail view of Review-model"""
    class Meta:
        model = Review
        fields = "__all__"