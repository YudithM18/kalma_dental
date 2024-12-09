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

from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission


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
    permission_classes = [IsAuthenticated, IsPrincipal]
    

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [IsAuthenticated, IsPrincipal]
    
                ################################
class testimoniosListCreate(generics.ListCreateAPIView):
    queryset = testimonios.objects.all()
    serializer_class = testimoniosSerializer
     
    def get_permissions(self):
        """
        Define permisos personalizados por tipo de solicitud.
        - GET: Permite acceso público (sin autenticación).
        - POST: Requiere autenticación (solo usuarios autenticados).
        """
        if self.request.method == 'GET':
            # Permite acceso a cualquier usuario para GET (sin token)
            return [AllowAny()]
        else:
            # Requiere autenticación para POST (crear)
            return [IsAuthenticated(), IsPrincipal()]

class testimoniosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = testimonios.objects.all()
    serializer_class = testimoniosSerializer
    permission_classes = [IsAuthenticated, IsPrincipal]
    
                ################################

class recommendationsListCreate(generics.ListCreateAPIView):
    queryset = recommendations.objects.all()
    serializer_class = recommendationsSerializer
    
    def get_permissions(self):
        """
        Define permisos personalizados por tipo de solicitud.
        - GET: Permite acceso público (sin autenticación).
        - POST: Requiere autenticación (solo usuarios autenticados).
        """
        if self.request.method == 'GET':
            # Permite acceso a cualquier usuario para GET (sin token)
            return [AllowAny()]
        else:
            # Requiere autenticación para POST (crear)
            return [IsAuthenticated(), IsEditor() | IsPrincipal()] 
   

class recommendationsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = recommendations.objects.all()
    serializer_class = recommendationsSerializer
    
    def get_permissions(self):
        """
        Define permisos personalizados para los métodos:
        - GET: Permite acceso público (sin autenticación).
        - PUT, DELETE: Requiere autenticación y ser un 'editor' o 'principal'.
        """
        if self.request.method == 'GET':
            return [AllowAny()]
        elif self.request.method in ['PUT', 'DELETE']:
            return [IsAuthenticated(), IsEditor() | IsPrincipal()]
        else:
            return [IsAuthenticated()]    
            ################################

class video_blogListCreate(generics.ListCreateAPIView):
    queryset = video_blog.objects.all()
    serializer_class = video_blogSerializer
    
    def get_permissions(self):
        """
        Define permisos personalizados por tipo de solicitud.
        - GET: Permite acceso público (sin autenticación).
        - POST: Requiere autenticación (solo usuarios autenticados).
        """
        if self.request.method == 'GET':
            # Permite acceso a cualquier usuario para GET (sin token)
            return [AllowAny()]
        else:
            # Requiere autenticación para POST (crear)
            return [IsAuthenticated(), IsEditor() | IsPrincipal()] 
    
class video_blogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = video_blog.objects.all()
    serializer_class = video_blogSerializer
    
    def get_permissions(self):
        """
        Define permisos personalizados para los métodos:
        - GET: Permite acceso público (sin autenticación).
        - PUT, DELETE: Requiere autenticación y ser un 'editor' o 'principal'.
        """
        if self.request.method == 'GET':
            return [AllowAny()]
        elif self.request.method in ['PUT', 'DELETE']:
            return [IsAuthenticated(), IsEditor() | IsPrincipal()]
        else:
            return [IsAuthenticated()]
    
                ################################

class specialityListCreate(generics.ListCreateAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
    
    def get_permissions(self):
        """
        Define permisos personalizados por tipo de solicitud.
        - GET: Permite acceso público (sin autenticación).
        - POST: Requiere autenticación (solo usuarios autenticados).
        """
        if self.request.method == 'GET':
            # Permite acceso a cualquier usuario para GET (sin token)
            return [AllowAny()]
        else:
            # Requiere autenticación para POST (crear)
            return [IsAuthenticated(), IsPrincipal()]
    
class specialityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
                ################################

               
class qualificationListCreate(generics.ListCreateAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
    
    def get_permissions(self):
        """
        Define permisos personalizados por tipo de solicitud.
        - GET: Permite acceso público (sin autenticación).
        - POST: Requiere autenticación (solo usuarios autenticados).
        """
        if self.request.method == 'GET':
            # Permite acceso a cualquier usuario para GET (sin token)
            return [AllowAny()]
        else:
            # Requiere autenticación para POST (crear)
            return [IsAuthenticated(), IsPrincipal()]
    
class qualificationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
                ################################
                

class specialistsListCreate(generics.ListCreateAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
    
    def get_permissions(self):
        """
        Define permisos personalizados por tipo de solicitud.
        - GET: Permite acceso público (sin autenticación).
        - POST: Requiere autenticación (solo usuarios autenticados).
        """
        if self.request.method == 'GET':
            # Permite acceso a cualquier usuario para GET (sin token)
            return [AllowAny()]
        else:
            # Requiere autenticación para POST (crear)
            return [IsAuthenticated(), IsPrincipal()]
    
    
class specialistsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
                ################################


class servicesListCreate(generics.ListCreateAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    
    def get_permissions(self):
        """
        Define permisos personalizados por tipo de solicitud.
        - GET: Permite acceso público (sin autenticación).
        - POST: Requiere autenticación (solo usuarios autenticados).
        """
        if self.request.method == 'GET':
            # Permite acceso a cualquier usuario para GET (sin token)
            return [AllowAny()]
        else:
            # Requiere autenticación para POST (crear)
            return [IsAuthenticated(), IsPrincipal()]
    
class servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]

