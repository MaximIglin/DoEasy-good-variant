from django.urls.conf import path
from rest_framework.routers import SimpleRouter
from .views import AllProductsViewSet, ProductsByCategoryViewSet


router = SimpleRouter()

urlpatterns = [
    path("api/categoryproducts/",ProductsByCategoryViewSet.as_view())
    
]

router.register("api/products", AllProductsViewSet)

urlpatterns += router.urls
