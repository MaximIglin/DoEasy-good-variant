from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from .models import Product, CartProduct, Cart, Customer, Smartphones, Laptops
from .serializers import SmartphonesSerializer, LaptopsSerializer


def get_products_by_category(category_slug):
    """This fuction is return all products by accepted category"""
    if category_slug == "smartphones":
        products = Smartphones.objects.all()
        serializer = SmartphonesSerializer(products, many = True)
        return Response(serializer.data)
    elif category_slug == "laptops":
            products = Laptops.objects.all()
            serializer = LaptopsSerializer(products, many = True)
            return Response(serializer.data)   
    return None    


def get_product_by_slug(category_slug, product_slug):
    """This fucntion is return product by id """
    if category_slug =="smartphones":
        product = Smartphones.objects.get(slug = product_slug)
        serializer = SmartphonesSerializer(product)
        return Response(serializer.data)
    elif category_slug == "laptops":
        product = Laptops.objects.get(slug = product_slug)
        serializer = LaptopsSerializer(product)
        return Response(serializer.data) 
    return None


def get_cart_products_by_customer(user):
    """This function is return all products in user's cart"""
    customer = Customer.objects.get(user = user)
    cart = Cart.objects.get(owner = customer)
    products = CartProduct.objects.filter(cart = cart)
    return products


def get_user_by_jwt(self, request):
    """This function is return user by jwt-token"""
    request_token = self.request.headers.get('Authorization')
    token = Token.objects.get(key = request_token)
    return token.user
    