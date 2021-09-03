from .models import Product, CartProduct, Cart, Customer, Smartphones, Laptops


def get_products_by_category(category_slug):
    """This fuction is return all products by accepted category"""
    if category_slug == "smartphones":
        products = Smartphones.objects.all()
        return products
    elif category_slug == "laptops":
        products = Laptops.objects.all()
        return products    
    return None    


def get_product_by_slug(category_slug, product_slug):
    """This fucntion is return product by id """
    if category_slug =="smartphones":
        product = Smartphones.objects.get(slug = product_slug)
        return product
    elif category_slug == "laptops":
        product = Laptops.objects.get(slug = product_slug)
        return product

    return None    