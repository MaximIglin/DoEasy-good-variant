from rest_framework import serializers
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProductSerializer
from .services import get_all_products, get_products_by_category, get_product_by_slug



class AllProductsViewSet(ModelViewSet):
    """ViewSet for all-products-api"""
    queryset = get_all_products()
    serializer_class = ProductSerializer


class ProductsByCategoryViewSet(ListAPIView):
    """View for all products in request category"""
    serializer_class = ProductSerializer
    queryset = get_all_products()

    def get_queryset(self):
        category_slug = self.request.query_params.get('slug')
        return get_products_by_category(category_slug)


class ProductDetailApi(APIView):
    """ViewSet for detail view product"""       
    def get(self, request):
        product_slug = self.request.query_params.get('slug')
        product = get_product_by_slug(product_slug)
        serializer = ProductSerializer(product)
        return Response(serializer.data)


