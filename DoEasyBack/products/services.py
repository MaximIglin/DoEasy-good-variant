from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from .models import Product, CartProduct, Cart, Customer, Smartphones, Laptops
from .serializers import SmartphonesSerializer, LaptopsSerializer

######## products by category  and slug##########
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

###### cart service
def get_cart_products_queryset_by_customer(user):
    """This function is return queryset with all products in user's cart"""
    customer = Customer.objects.get(user = user)
    cart = Cart.objects.get(owner = customer)
    products = CartProduct.objects.filter(cart = cart)
    return products


def get_cart_products_array_by_customer(products):
    """This function is form array with cart-products for serialization"""
    all_products = []
    for product in products:
        if str(product.content_object.category) == "Ноутбуки":
            for i in range(0,product.qty):
                all_products.append(LaptopsSerializer(Laptops.objects.get(name = product.content_object.name) ).data)
        if str(product.content_object.category) == "Смартфоны":
            for i in range(0,product.qty):                
                all_products.append(SmartphonesSerializer(Smartphones.objects.get(name = product.content_object.name) ).data)    
    return all_products            



def get_cart_by_user(user):
    """This function is return user's cart"""
    customer = Customer.objects.get(user = user)
    cart = Cart.objects.get(owner = customer)
    return cart


def add_product_to_cart(self, request):
    """This fucntion is add product into cart"""              
    product_category = self.request.data['product_category']  
    product_slug = self.request.data['product_slug']          #  collection all request's data from JSON request
    qty = self.request.data['qty']                            

    user = get_user_by_jwt(self, request)                     
    customer = Customer.objects.get(user=user)                
    cart = get_cart_by_user(user)                             #  collection user's cart products
    products = get_cart_products_queryset_by_customer(user)   

    if product_category == "Ноутбуки":
        product_instance = Laptops.objects.get(slug=product_slug)
        is_in_cart = False
        add_of_increase_product(product_instance, products, product_slug, qty, cart, customer)

    if product_category == "Смартфоны":
        product_instance = Smartphones.objects.get(slug=product_slug)
        is_in_cart = False
        add_of_increase_product(product_instance, products, product_slug, qty, cart, customer)              


def delete_product_in_cart(self, request):
    """This fucntion is delete cart-product"""
    product_for_delete_slug = self.request.data['product_slug']
    delete_qty = self.request.data['delete_qty']
    user = get_user_by_jwt(self, request)
    cart = get_cart_by_user(user)
    products = get_cart_products_queryset_by_customer(user)
    for product in products:
        product_price = product.total_price / product.qty
        if str(product.content_object.slug) == product_for_delete_slug:
            product.qty -= delete_qty
            product.total_price -= delete_qty*product_price
            cart.final_price -= delete_qty*product_price
            cart.total_products -= delete_qty
            product.save()
            if product.qty == 0:
                product.delete()
            cart.save()

def add_of_increase_product(product_instance, products, product_slug, qty, cart, customer):
    for product in products:
        if product_slug == product.content_object.slug:
            product.qty += qty
            product.total_price += int(qty)*product_instance.price
            product.save()
            is_in_cart = True
            cart.total_products += qty
            cart.final_price += product.total_price
            cart.save()                    
            break
    if not is_in_cart:    
        cart_product = CartProduct.objects.create(user=customer, cart=cart, content_object=product_instance, qty=qty, total_price=int(qty)*product_instance.price)
        cart.products.add(cart_product)
        cart.total_products += qty
        cart.final_price += cart_product.total_price
        cart.save() 

#####user
def get_user_by_jwt(self, request):
    """This function is return user by jwt-token"""
    request_token = self.request.headers.get('Authorization')
    token = Token.objects.get(key = request_token)
    return token.user
    