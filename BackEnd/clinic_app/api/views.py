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
from .serializers import UserRegisterSerializer
from .serializers import testimoniosSerializer
from .serializers import recommendationsSerializer
from .serializers import video_blogSerializer
from .serializers import specialistsSerializer
from .serializers import specialitySerializer
from .serializers import institutionsSerializer
from .serializers import qualificationSerializer
from .serializers import servicesSerializer

from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, BasePermission

class IsPrincipal(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'principal').exists()
    
            ################################    
    
class IsSecundario(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'secundario').exists()

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
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]

class testimoniosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = testimonios.objects.all()
    serializer_class = testimoniosSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
                ################################

class recommendationsListCreate(generics.ListCreateAPIView):
    queryset = recommendations.objects.all()
    serializer_class = recommendationsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario] 

class recommendationsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = recommendations.objects.all()
    serializer_class = recommendationsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
            ################################

class video_blogListCreate(generics.ListCreateAPIView):
    queryset = video_blog.objects.all()
    serializer_class = video_blogSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsEditor]
    
class video_blogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = video_blog.objects.all()
    serializer_class = video_blogSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsEditor]
                ################################

class specialistsListCreate(generics.ListCreateAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
    
class specialistsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = specialists.objects.all()
    serializer_class = specialistsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
                ################################

class specialityListCreate(generics.ListCreateAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
    
class specialityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = speciality.objects.all()
    serializer_class = specialitySerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
                ################################

class institutionsListCreate(generics.ListCreateAPIView):
    queryset = institutions.objects.all()
    serializer_class = institutionsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
    
class institutionsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = institutions.objects.all()
    serializer_class = institutionsSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
                ################################
                
class qualificationListCreate(generics.ListCreateAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
    
class qualificationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = qualification.objects.all()
    serializer_class = qualificationSerializer
    permission_classes= [IsAuthenticated, IsPrincipal, IsSecundario]
                ################################

class servicesListCreate(generics.ListCreateAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]
    
class servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    permission_classes= [IsAuthenticated, IsPrincipal]    



def buscar(request):
    query = request.GET.get('q')
    if query:
        usuarios = User.objects.filter(Q(username__icontains=query) | Q(email__icontains=query))
        testimonios = testimonios.objects.filter(comentario__icontains=query)
        recomendaciones = recommendations.objects.filter(consejo__icontains=query)
        videos = video_blog.objects.filter(titulo__icontains=query)
        especialistas = specialists.objects.filter(Q(nombre__icontains=query) | Q(especialidad__icontains=query))
        especialidades = speciality.objects.filter(nombre__icontains=query)
        instituciones = institutions.objects.filter(nombre__icontains=query)
        calificaciones = qualification.objects.filter(Q(nivel__icontains=query) | Q(institucion__icontains=query))
        servicios = services.objects.filter(Q(nombre__icontains=query) | Q(descripcion__icontains=query))

        resultados = {
            'usuarios': [{'username': u.username, 'email': u.email} for u in usuarios],
            'testimonios': [{'comentario': t.comentario, 'paciente': t.paciente} for t in testimonios],
            'recomendaciones': [{'consejo': r.consejo} for r in recomendaciones],
            'video_blog': [{'titulo': v.titulo} for v in videos],
            'especialistas': [{'nombre': e.nombre, 'especialidad': e.especialidad} for e in especialistas],
            'especialidades': [{'nombre': esp.nombre} for esp in especialidades],
            'instituciones': [{'nombre': i.nombre} for i in instituciones],
            'calificaciones': [{'nivel': q.nivel, 'institucion': q.institucion} for q in calificaciones],
            'servicios': [{'nombre': s.nombre, 'descripcion': s.descripcion} for s in servicios],
        }
        return JsonResponse(resultados, safe=False)
    return JsonResponse({
        'usuarios': [], 'testimonios': [], 'recomendaciones': [], 'video_blog': [],
        'especialistas': [], 'especialidades': [], 'instituciones': [], 'calificaciones': [],
        'servicios': []
    }, safe=False)
