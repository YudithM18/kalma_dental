from rest_framework import serializers
from django.contrib.auth.models import User

#IMPORTS MODELS
from .models import testimonios


class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ('username', 'email', 'password')
        
    def create(self, validated_data):
        user = User(**validated_data)
        user.save
        return user
    
class testimoniosSerializer(serializers.ModelSerializer):
    class Meta:
        model = testimonios
        
        
    
