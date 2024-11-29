from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    
    path ('token/', TokenObtainPairView.as_view(), name = 'token_obtain_pair'),
    path ('token/refresh/', TokenRefreshView.as_view(), name= 'token_resfresh'),
    
    path('users/', views.UserListCreate.as_view(), name='user_list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user_detail'),
    
    path('testimonios/', views.testimoniosListCreate.as_view(), name = 'testimonios_list'),
    path('testimonios/<int:pk>/', views.testimoniosDetail.as_view(), name = 'testimonios_detail'),
 
    path('consejos/', views.recommendationsListCreate.as_view(), name = 'consejos_list'),
    path('consejos/<int:pk>/', views.recommendationsDetail.as_view(), name = 'consejos_detail'),
    
    path('video_blog/', views.video_blogListCreate.as_view(), name = 'video_blog_list'),
    path('video_blog/<int:pk>/', views.video_blogDetail.as_view(), name = 'video_blog_detail'),
    
    path('especialidad/', views.specialityListCreate.as_view(), name = 'especialidad_list'),
    path('especialidad/<int:pk>/', views.specialityDetail.as_view(), name = 'especialidad_detail'),
    
    path('institucion/', views.institutionsListCreate.as_view(), name = 'institucion_list'),
    path('institucion/<int:pk>/', views.institutionsDetail.as_view(), name = 'institucion_detail'),
    
    path ('titulacion/', views.qualificationListCreate.as_view(), name = 'titulacion_list'),
    path('titulacion/<int:pk>/', views.qualificationDetail.as_view(), name = 'titulacion_detail'),
    
    path ('especialistas/', views.specialistsListCreate.as_view(), name = 'especialistas_list'),
    path('especialistas/<int:pk>/', views.specialistsDetail.as_view(), name = 'especialistas_detail'),
    
    path ('servicios/', views.servicesListCreate.as_view(), name = 'servicios_list'),
    path('servicios/<int:pk>/', views.servicesDetail.as_view(), name = 'servicios'),

]