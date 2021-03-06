from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


from .models import CartProduct, Cart, Customer, Smartphones, Laptops


class SmartphonesSerializer(ModelSerializer):
    """This serializer for Product-model"""
    class Meta:
        model = Smartphones
        fields = "__all__"

    def to_representation(self, instance):
        rep = super(SmartphonesSerializer, self).to_representation(instance)
        rep['category'] = instance.category.title
        rep['category_slug'] = instance.category.slug
        rep['brand'] = instance.brand.name
        rep['manufecture_country'] = instance.manufecture_country.name        
        return rep
        

class LaptopsSerializer(ModelSerializer):
    """This serializer for Product-model"""
    class Meta:
        model = Laptops
        fields = "__all__"

    def to_representation(self, instance):
        rep = super(LaptopsSerializer, self).to_representation(instance)
        rep['category'] = instance.category.title
        rep['category_slug'] = instance.category.slug
        rep['brand'] = instance.brand.name
        rep['manufecture_country'] = instance.manufecture_country.name        
        return rep


class CartProductSerializer(serializers.ModelSerializer):
    """This serializer for Cart-product model"""
    class Meta:
        model = CartProduct
        fields = "__all__"


class CartSerizlizer(ModelSerializer):
    """This serializer for cart model"""
    class Meta:
        model = Cart
        fields = "__all__"

    def to_representation(self, instance):
        rep = super(CartSerizlizer, self).to_representation(instance)
        rep['owner'] = instance.owner.user.first_name        
        return rep    
