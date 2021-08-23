from rest_framework import fields, serializers
from .models import SliderComponent


class SliderComponentSerializer(serializers.ModelSerializer):
    """Serializer for SliderComponent model"""

    class Meta:
        model = SliderComponent
        fields = ['id', 'slider_image_link', 'slider_comp_text'] 