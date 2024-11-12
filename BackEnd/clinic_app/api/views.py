from rest_framework import generics

#IMPORTS MODELS

#IMPORTS SELIALIAZERS
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission

class IsPrincipal(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'principal').exist()

class IsSecundario(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'secundario').exist()

class IsEditor (BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'editor').exist()

    
class UserListCreate(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
