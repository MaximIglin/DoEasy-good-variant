from django.contrib import admin
from .models import Cart, CartProduct, Customer, Specification, Product


admin.site.register(Cart)
admin.site.register(CartProduct)
admin.site.register(Customer)
admin.site.register(Specification)
admin.site.register(Product)