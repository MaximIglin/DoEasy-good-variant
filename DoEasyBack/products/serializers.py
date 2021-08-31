from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Product, CartProduct, Cart, Customer, Specification


class ProductSerializer(ModelSerializer):
    """This serializer for Product-model"""
    class Meta:
        model = Product
        fields = "__all__"

        