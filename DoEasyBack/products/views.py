from django.apps.config import AppConfig
from rest_framework.views import APIView

from .services import get_products_by_category, get_product_by_slug


class ProductsAPI(APIView):
    """View for all products in request category"""
    def get(self, request):
        category_slug = self.request.query_params.get('slug') 
        print(request.META.get('Authorisation'))
        return get_products_by_category(category_slug)


class SmartphonesDetailApi(APIView):
    """ViewSet for detail view product"""       
    def get(self, request):
        category_slug = self.request.query_params.get('category_slug')
        product_slug = self.request.query_params.get('product_slug')
        return get_product_by_slug(category_slug, product_slug)


       
        



