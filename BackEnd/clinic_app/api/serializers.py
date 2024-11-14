from rest_framework import serializers
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
import re

#IMPORTS MODELS
from .models import testimonios
from .models import recommendations
from .models import video_blog
from .models import specialists
from .models import speciality
from .models import institutions
from .models import qualification
from .models import services


class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ('username', 'email', 'password')
        
    def create(self, validated_data):
        # Verificar si el username o el email ya están en uso
        username = validated_data.get('username')
        email = validated_data.get('email')
        
        # Llamar a las validaciones para evitar duplicados
        self.validate_unique_username(username)
        self.validate_unique_email(email)
        
        # Validar que la contraseña cumpla con los requisitos de seguridad
        password = validated_data.get('password')
        self.validate_password(password)
        
        # Crear el usuario con la contraseña encriptada
        user = User(**validated_data)
        user.set_password(password)  # Utilizamos `set_password` para encriptar la contraseña
        user.save()
        return user
   
class testimoniosSerializer(serializers.ModelSerializer):
    class Meta:
        model = testimonios
        fields = '__all__'
        
             #Validación de espacios Vacios
    def validate_fullname (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value   
    
    #Validación para el nombre empieze con Mayúscula
    def validate_fullname(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre debe empezar con mayúscula.")
        return value  
    
    def validate_testimony (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value
    
    #Validación para el nombre empieze con Mayúscula
    def validate_testimony(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El testimonio debe empezar con mayúscula.")
        return value   
        

class recommendationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = recommendations
        fields = '__all__'
        
        #Validacion de espacios vacios
    def validate_tips_title (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
    #Validación para el nombre empieze con Mayúscula
    def validate_tips_title(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El titulo debe empezar con mayúscula.")
        return value  
    
    def validate_tips_description (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
        

class video_blogSerializer(serializers.ModelSerializer):
    class Meta:
        model = video_blog
        fields = '__all__'
        
        #Validacion de espacios vacios
    def validate_title (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value  
    
    #Validación para el titulo empieze con Mayúscula
    def validate_title(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El titulo debe empezar con mayúscula.")
        return value  
        
        
class specialistsSerializer(serializers.ModelSerializer):
    class Meta:
        model = specialists
        fields = '__all__'
        
        #Validacion de espacios vacios
    def validate_full_name (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
    #Validación para el nombre empieze con Mayúscula
    def validate_full_name(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre debe empezar con mayúscula.")
        return value  
        
        
class specialitySerializer(serializers.ModelSerializer):
    class Meta:         
        model = speciality
        fields = '__all__'
        
        #Validacion de espacios vacios
    def validate_speciality_name (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
    #Validación para el nombre empieze con Mayúscula
    def validate_speciality_name(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre debe empezar con mayúscula.")
        return value  
        
class institutionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = institutions
        fields = '__all__'
        
        #Validacion de espacios vacios
    def validate_institutions (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
    
    #Validación para el nombre empieze con Mayúscula
    def validate_institutions(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre de la institucion debe empezar con mayúscula.")
        return value  
    
    
    def validate_country (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
    #Validación para el nombre empieze con Mayúscula
    def validate_country(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre del pais debe empezar con mayúscula.")
        return value  
    
    def validate_province (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
    #Validación para el nombre empieze con Mayúscula
    def validate_province(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre de la provincia debe empezar con mayúscula.")
        return value  

        
class qualificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = qualification
        fields = '__all__'
        
        #Validacion de espacios vacios
    def validate_qualification_name (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
    #Validación para el nombre empieze con Mayúscula
    def validate_qualification_name(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre debe empezar con mayúscula.")
        return value  
        
        

class servicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = services
        fields = '__all__'
        
      #Validacion de espacios vacios
    def validate_services_name (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
     #Validación para el nombre empieze con Mayúscula
    def validate_services_name(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre debe empezar con mayúscula.")
        return value  

    def validate_description (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
        
