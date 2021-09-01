from django.urls.conf import path
from rest_framework.routers import SimpleRouter
from .views import AllProductsViewSet, ProductsByCategoryViewSet, ProductDetailApi


router = SimpleRouter()

urlpatterns = [
    path("api/categoryproducts/",ProductsByCategoryViewSet.as_view()),
    path("api/productdetail/", ProductDetailApi.as_view())
]

router.register("api/products", AllProductsViewSet)

urlpatterns += router.urls
