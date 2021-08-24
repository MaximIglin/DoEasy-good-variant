from django.shortcuts import render
from .models import Review
from rest_framework import viewsets
from .serializers import ReviewSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    """This ViewSet for Review-data API"""
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

