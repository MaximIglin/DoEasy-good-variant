from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import ReviewViewSet


urlpatterns = [

]

router = SimpleRouter()

router.register('api/reviews',ReviewViewSet)

urlpatterns += router.urls