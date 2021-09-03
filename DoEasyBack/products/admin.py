from django.contrib import admin
from .models import Cart, CartProduct, Customer, Brand, Smartphones, Manufacturer_country, Laptops


admin.site.register(Cart)
admin.site.register(CartProduct)
admin.site.register(Customer)
admin.site.register(Brand)
admin.site.register(Smartphones)
admin.site.register(Manufacturer_country)
admin.site.register(Laptops)
