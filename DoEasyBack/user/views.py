from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import MyCustomTokenSerializer, UserSerializer
from .models import CustomUser


class UserApi(APIView):
    """This API for get user by authtoken"""
    def get(self, request):
        request_token = self.request.headers.get('Authorization')
        token = Token.objects.get(key = request_token)
        serializer = MyCustomTokenSerializer(token)
        return Response(serializer.data)


class DoUserChanges(APIView):
    """This model for change user data"""
    def post(self, request):
        user = CustomUser.objects.get(email = request.data['email'])
        user.first_name = request.data['first_name']
        user.last_name = request.data['last_name']
        user.birh_date = request.data['birth_date']
        user.save()
        return Response(UserSerializer(user).data)     





