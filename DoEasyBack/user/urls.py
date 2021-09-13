from django.urls import path,include
from rest_framework import routers

from .views import UserApi, DoUserChanges

urlpatterns = [
    path('auth/', include ('rest_auth.urls')),
    path('auth/register/', include ('rest_auth.registration.urls')),
    path('get_user/', UserApi.as_view()),
    path('do_change/', DoUserChanges.as_view()),
    
]


