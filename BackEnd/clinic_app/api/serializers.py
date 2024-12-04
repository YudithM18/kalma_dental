from rest_framework import serializers

from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
import re
from django.contrib.auth.models import Group

#IMPORTS MODELS
from .models import testimonios
from .models import recommendations
from .models import video_blog
from .models import speciality
from .models import qualification
from .models import specialists
from .models import services




class UserRegisterSerializer(serializers.ModelSerializer):
    role = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'role', 'password', 'username', 'email', 'first_name', 'last_name']

    def validate_username(self, value):
        # Validación de largo mínimo
        if len(value) <= 2:
            raise serializers.ValidationError("El nombre de usuario debe tener más de 2 caracteres.")
        
        # Verificar que el username no esté ya registrado
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError(f"El nombre de usuario '{value}' ya está registrado.")
        
        return value

    def validate_email(self, value):
        # Validación de largo mínimo
        if len(value) <= 2:
            raise serializers.ValidationError("El correo electrónico debe tener más de 2 caracteres.")
        
        # Verificar que el email no esté ya registrado
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(f"El correo electrónico '{value}' ya está registrado.")
        
        return value

    def validate_password(self, value):
        # Validación de largo mínimo
        if len(value) < 8:
            raise serializers.ValidationError("La contraseña debe tener al menos 8 caracteres.")
        
        # Validación de seguridad de la contraseña
        if not re.search(r'[A-Z]', value):
            raise serializers.ValidationError("La contraseña debe contener al menos una letra mayúscula.")
        
        if not re.search(r'[a-z]', value):
            raise serializers.ValidationError("La contraseña debe contener al menos una letra minúscula.")
        
        if not re.search(r'[0-9]', value):
            raise serializers.ValidationError("La contraseña debe contener al menos un número.")
        
        return value

    def create(self, validated_data):
        # Extrae el campo adicional 'role' que se usará para el grupo
        role = validated_data.pop('role', None)

        # Crear el usuario sin guardar la contraseña aún
        user = User(**validated_data)

        # Establece la contraseña usando el método set_password
        user.set_password(validated_data['password'])
        # Guarda el usuario en la base de datos
        user.save()

        # Asignar el rol si existe
        if role:
            try:
                group = Group.objects.get(name=role)
                user.groups.add(group)
            except Group.DoesNotExist:
                raise serializers.ValidationError(f"El rol '{role}' no existe.")

        return user

    def update(self, instance, validated_data):
        # Extrae el rol si se proporciona
        role = validated_data.pop('role', None)

        # Actualiza los campos del usuario
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)

        # Si se proporciona una nueva contraseña, se encripta
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])

        # Guarda los cambios en el usuario
        instance.save()

        # Cambia el rol del usuario si se proporciona
        if role is not None:
            instance.groups.clear()  # Elimina todos los grupos actuales
            try:
                group = Group.objects.get(name=role)
                instance.groups.add(group)  # Asigna el nuevo grupo
            except Group.DoesNotExist:
                raise serializers.ValidationError(f"El rol '{role}' no existe.")

        return instance

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
        
