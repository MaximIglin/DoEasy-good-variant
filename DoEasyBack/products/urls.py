from django.urls.conf import path
from rest_framework.routers import SimpleRouter
from .views import SmartphonesAPI, SmartphonesDetailApi


router = SimpleRouter()

urlpatterns = [
    path("api/categoryproducts/",SmartphonesAPI.as_view()),
    path("api/productdetail/", SmartphonesDetailApi.as_view())
]

# router.register("api/products", AllProductsViewSet)

urlpatterns += router.urls
