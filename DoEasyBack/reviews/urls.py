from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import ReviewViewSet, ReviewDetailApi


urlpatterns = [
    path('api/reviews/<int:pk>',ReviewDetailApi.as_view())
]

router = SimpleRouter()

router.register('api/reviews',ReviewViewSet)

urlpatterns += router.urls
##test