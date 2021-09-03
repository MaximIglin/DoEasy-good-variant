from rest_framework import serializers
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from .models import Smartphones
from rest_framework.response import Response
from .serializers import SmartphonesSerializer, LaptopsSerializer
from .services import get_products_by_category, get_product_by_slug



# class AllProductsViewSet(ModelViewSet):
#     """ViewSet for all-products-api"""
#     queryset = get_all_products()
#     serializer_class = ProductSerializer


class SmartphonesAPI(ListAPIView):
    """View for all products in request category"""
    serializer_class = SmartphonesSerializer

    def get_queryset(self):
        category_slug = self.request.query_params.get('slug')
        return get_products_by_category(category_slug)


class SmartphonesDetailApi(APIView):
    """ViewSet for detail view product"""       
    def get(self, request):
        category_slug = self.request.query_params.get('category_slug')
        product_slug = self.request.query_params.get('product_slug')
        product = get_product_by_slug(category_slug, product_slug)
        serializer = SmartphonesSerializer(product)
        return Response(serializer.data)


