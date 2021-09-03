from django.urls.conf import path
from rest_framework.routers import SimpleRouter
from .views import ProductsAPI, SmartphonesDetailApi


router = SimpleRouter()

urlpatterns = [
    path("api/categoryproducts/",ProductsAPI.as_view()),
    path("api/productdetail/", SmartphonesDetailApi.as_view())
]


urlpatterns += router.urls
