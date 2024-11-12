from django.urls import path
from . import views

urlpatterns = [
    
    path('users/', views.UserListCreate.as_view(), name='user_list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user_detail'),
    
]