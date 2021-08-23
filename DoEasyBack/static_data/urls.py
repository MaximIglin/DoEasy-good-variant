from django.urls import path
from .views import SliderComponentViewSet
from rest_framework import routers

urlpatterns = [ 
    
]

router = routers.SimpleRouter()
router.register('api/slidercomponent', SliderComponentViewSet)

urlpatterns += router.urls