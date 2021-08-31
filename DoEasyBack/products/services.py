from .models import Product, CartProduct, Cart, Customer, Specification


def get_all_products():
    """This function is return all products"""
    all_products_queryset = Product.objects.all()
    return (all_products_queryset)

def get_products_by_category(category_slug):
    """This function is return products by category"""
    products_in_category = Product.objects.filter(category__slug = category_slug) 
    return products_in_category   