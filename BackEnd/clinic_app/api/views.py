from rest_framework import generics

#IMPORTS MODELS
from .models import testimonios
from .models import recommendations
from .models import video_blog
from .models import specialists
from .models import speciality
from .models import institutions
from .models import qualification
from .models import services

#IMPORTS SELIALIAZERS
from .serializers import UserSerializer
from .serializers import testimoniosSerializer
from .serializers import recommendationsSerializer
from .serializers import video_blogSerializer
from .serializers import specialistsSerializer
from .serializers import specialitySerializer
from .serializers import institutionsSerializer
from .serializers import qualificationSerializer
from .serializers import servicesSerializer

from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission

class IsPrincipal(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'principal').exist()
    
            ################################    
    
class IsSecundario(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'secundario').exist()

            ################################
class IsEditor (BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'editor').exist()

            ################################
    
class UserListCreate(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
                ################################

class testimoniosListCreate(generics.ListCreateAPIView):
    queryset = testimonios.objects.all()
    serializer_class = testimoniosSerializer 

class testimoniosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = testimonios.objects.all()
    serializer_class = testimoniosSerializer
    
                ################################

class recommendationsListCreate(generics.ListCreateAPIView):
    queryset = recommendations.objects.all()
    serializer_class = recommendationsSerializer 

class recommendationsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = recommendations.objects.all()
    serializer_class = recommendationsSerializer
    
            ################################

class video_blogListCreate(generics.ListCreateAPIView):
    queryset = video_blog.objects.all()
    serializer_class = video_blogSerializer
    
class video_blogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = video_blog.objects.all()
    serializer_class = video_blogSerializer
    
                ################################

class specialistsListCreate(generics.ListCreateAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
    
class specialistsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
    
                ################################

class specialityListCreate(generics.ListCreateAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
    
class specialityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
    
                ################################

class institutionsListCreate(generics.ListCreateAPIView):
    queryset = institutions.objects.all()
    serializer_class = institutionsSerializer
    
class institutionsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = institutions.objects.all()
    serializer_class = institutionsSerializer
    
                ################################
                
class qualificationListCreate(generics.ListCreateAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
    
class qualificationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
    
                ################################

class servicesListCreate(generics.ListCreateAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    
class servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer