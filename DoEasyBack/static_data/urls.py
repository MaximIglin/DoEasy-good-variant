from django.urls import path
from rest_framework import routers

from .views import SliderComponentViewSet


urlpatterns = [ 
    
]

router = routers.SimpleRouter()
router.register('api/slidercomponent', SliderComponentViewSet)

urlpatterns += router.urls