from django.urls import path
from rest_framework import routers
from .views import AllCategoryViewSet


urlpatterns = [
    
]


router = routers.SimpleRouter()
router.register('api/category', AllCategoryViewSet)
urlpatterns += router.urls