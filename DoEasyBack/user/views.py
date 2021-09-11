from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MyCustomTokenSerializer


class UserApi(APIView):
    def get(self, request):
        request_token = self.request.headers.get('Authorization')
        token = Token.objects.get(key = request_token)
        serializer = MyCustomTokenSerializer(token)
        return Response(serializer.data)




