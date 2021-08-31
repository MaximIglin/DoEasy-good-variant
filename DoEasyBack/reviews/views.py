from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from .models import Review
from rest_framework import  viewsets
from rest_framework.views import APIView
from .serializers import ReviewSerializer, ReviewDetailSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    """This ViewSet for Review-data API"""
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class ReviewDetailApi(APIView):
    """API for detail output of review"""
    def get(self,request,pk):
        review = Review.objects.get(id=pk)
        serializer = ReviewDetailSerializer(review)
        return Response(serializer.data)