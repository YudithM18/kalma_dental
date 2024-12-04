from rest_framework import generics

#IMPORTS MODELS
from .models import testimonios
from .models import recommendations 
from .models import video_blog
from .models import speciality
from .models import qualification
from .models import specialists
from .models import services


#IMPORTS SELIALIAZERS
from .serializers import UserRegisterSerializer
from .serializers import testimoniosSerializer
from .serializers import recommendationsSerializer
from .serializers import video_blogSerializer
from .serializers import specialitySerializer
from .serializers import qualificationSerializer
from .serializers import specialistsSerializer
from .serializers import servicesSerializer

from django.contrib.auth.models import User 

from rest_framework.permissions import IsAuthenticated, BasePermission


class IsPrincipal(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'principal').exists()
    
            ################################    

class IsEditor (BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'editor').exists()

            ################################

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    
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

class specialityListCreate(generics.ListCreateAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
    
class specialityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
                ################################

               
class qualificationListCreate(generics.ListCreateAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
    
class qualificationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
                ################################
                

class specialistsListCreate(generics.ListCreateAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
    
class specialistsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
                ################################


class servicesListCreate(generics.ListCreateAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    
class servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer

