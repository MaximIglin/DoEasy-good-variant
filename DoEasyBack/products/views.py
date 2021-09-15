from rest_framework.response import Response
from rest_framework.views import APIView

from .services import (get_products_by_category, get_product_by_slug,
                       get_user_by_jwt,get_cart_products_queryset_by_customer, 
                       get_cart_products_array_by_customer, add_product_to_cart,
                       delete_product_in_cart
                       )


class ProductsAPI(APIView):
    """View for all products in request category"""
    def get(self, request):
        category_slug = self.request.query_params.get('slug') 
        return get_products_by_category(category_slug)


class SmartphonesDetailApi(APIView):
    """ViewSet for detail view product"""       
    def get(self, request):
        category_slug = self.request.query_params.get('category_slug')
        product_slug = self.request.query_params.get('product_slug')
        return get_product_by_slug(category_slug, product_slug)


class AddToCard(APIView):
    """This API for add cart-product into customer-cart"""
    def get(self, request):
        user = get_user_by_jwt(self, request)
        products = get_cart_products_queryset_by_customer(user)
        all_products = get_cart_products_array_by_customer(products)
        return Response({'products':all_products})
        
    def post(self, request):
        add_product_to_cart(self, request)
        return Response({"response":"ok"})

    def delete(self, request):
        delete_product_in_cart()
        return Response({"response":"ok"})        



       
        



