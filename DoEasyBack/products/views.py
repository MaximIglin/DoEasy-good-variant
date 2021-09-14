from user.models import CustomUser
from django.apps.config import AppConfig
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from .models import CartProduct, Customer, Cart, Smartphones
from .services import get_products_by_category, get_product_by_slug, get_user_by_jwt
from .serializers import CartSerizlizer


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


class AddToCard(APIView):
    """This API for add cart-product into customer-cart"""

    def get(self, request):
        request_token = self.request.headers.get('Authorization')
        token = Token.objects.get(key = request_token)
        user = token.user
        customer = Customer.objects.get(user = user)
        cart = Cart.objects.get(owner = customer)
        return Response(CartSerizlizer(cart).data)
        

    def post(self, request):
        request_token = self.request.headers.get('Authorization')
        token = Token.objects.get(key = request_token)
        user = token.user
        customer = Customer.objects.get(user = user)
        cart = Cart.objects.get(owner = customer)
        print(cart.products)
        product_id = self.request.data['product_id']
        sum_of = self.request.data['price']
        cart_product = CartProduct.objects.create(user = customer, cart = cart, content_object = Smartphones.objects.get(id=product_id))
        cart.products.add(cart_product)
        return Response({"response":"ok"})


       
        



