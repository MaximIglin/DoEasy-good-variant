from django.shortcuts import render
from rest_framework import viewsets
from .models import SliderComponent
from .serializers import SliderComponentSerializer


class SliderComponentViewSet(viewsets.ModelViewSet):
    """Viewset for slider component API"""
    queryset = SliderComponent.objects.all()
    serializer_class = SliderComponentSerializer