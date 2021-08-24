from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    """This serializer for Review-model"""
    class Meta:
        model = Review
        fields = ['id','review_preview_link','title','review_short_text','review_all_text','author']