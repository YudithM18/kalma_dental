from rest_framework import generics

#IMPORTS MODELS
from .models import testimonios
from .models import recommendations  
from .models import video_blog
from .models import speciality
from .models import institutions
from .models import qualification
from .models import specialists
from .models import services

#IMPORTS SELIALIAZERS
from .serializers import UserRegisterSerializer
from .serializers import testimoniosSerializer
from .serializers import recommendationsSerializer 
from .serializers import video_blogSerializer
from .serializers import specialitySerializer
from .serializers import institutionsSerializer
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

class UserListCreate(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
                ################################

class testimoniosListCreate(generics.ListCreateAPIView):
    queryset = testimonios.objects.all()
    serializer_class = testimoniosSerializer 
    permission_classes= [IsAuthenticated, IsPrincipal]

class testimoniosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = testimonios.objects.all()
    serializer_class = testimoniosSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
                ################################

class recommendationsListCreate(generics.ListCreateAPIView):
    queryset = recommendations.objects.all()
    serializer_class = recommendationsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal] 

class recommendationsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = recommendations.objects.all()
    serializer_class = recommendationsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
            ################################

class video_blogListCreate(generics.ListCreateAPIView):
    queryset = video_blog.objects.all()
    serializer_class = video_blogSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
class video_blogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = video_blog.objects.all()
    serializer_class = video_blogSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
                ################################

class specialityListCreate(generics.ListCreateAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
class specialityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
                ################################

class institutionsListCreate(generics.ListCreateAPIView):
    queryset = institutions.objects.all()
    serializer_class = institutionsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
class institutionsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = institutions.objects.all()
    serializer_class = institutionsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
                ################################
               
class qualificationListCreate(generics.ListCreateAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
class qualificationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
                ################################
                

class specialistsListCreate(generics.ListCreateAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
class specialistsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
                ################################


class servicesListCreate(generics.ListCreateAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
class servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]    

