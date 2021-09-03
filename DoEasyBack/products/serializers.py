from rest_framework.serializers import ModelSerializer
from .models import Product, CartProduct, Cart, Customer, Smartphones, Laptops


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
                