from rest_framework.response import Response
from rest_framework.views import APIView

from .models import CartProduct, Customer, Cart, Laptops, Smartphones
from .services import get_products_by_category, get_product_by_slug, get_user_by_jwt, get_cart_products_by_customer
from .serializers import LaptopsSerializer


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



################################################### КОРЗИНА #########################################################################
class AddToCard(APIView):
    """This API for add cart-product into customer-cart"""

    def get(self, request):
        user = get_user_by_jwt(self, request)
        products = get_cart_products_by_customer(user)
        all_products = []
        for product in products:
            if str(product.content_object.category) == "Ноутбуки":
                all_products.append(LaptopsSerializer(Laptops.objects.get(name = product.content_object.name) ).data)
        return Response({'products':all_products})
        

    def post(self, request):
        user = get_user_by_jwt(self, request)
        customer = Customer.objects.get(user = user)
        cart = Cart.objects.get(owner = customer)
        product_id = self.request.data['product_id']
        sum_of = self.request.data['price']
        cart_product = CartProduct.objects.create(user = customer, cart = cart, content_object = Laptops.objects.get(id=product_id))
        print(cart_product.content_object)
        cart.products.add(cart_product)
        return Response({"response":"ok"})

    def delete(self, request):
        product_for_delete = self.request.data['product']
        user = get_user_by_jwt(self, request)
        products = get_cart_products_by_customer(user)
        for product in products:
            if str(product.content_object.name) == product_for_delete:
                product.delete()
        return Response({"response":"ok"})        



       
        



