from django.conf.urls import include
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('static_data.urls')),
    path('', include('categories.urls')),
    path('', include('reviews.urls')),
    path('api/v1/users/', include ('user.urls'))
]
