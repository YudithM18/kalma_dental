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
from .models import institutions
from .models import qualification
from .models import specialists
from .models import services



class UserRegisterSerializer(serializers.ModelSerializer):
    role = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name', 'role')

    def create(self, validated_data):
        # Obtener el rol y quitarlo de los datos para no guardar en el modelo User
        role = validated_data.pop('role')
        
        # Verificar si el username o el email ya están en uso
        username = validated_data.get('username')
        email = validated_data.get('email')
        self.validate_unique_username(username)
        self.validate_unique_email(email)

        # Validar que la contraseña cumpla con los requisitos de seguridad
        password = validated_data.get('password')
        self.validate_password(password)
        
        # Crear el usuario con la contraseña encriptada
        user = User(**validated_data)
        user.set_password(password)
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
        role = validated_data.pop('role', None)

        # Actualiza los campos del usuario
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)

        # Si se proporciona una nueva contraseña, se encripta
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])

        instance.save()

        # Cambia el rol del usuario si se proporciona
        if role is not None:
            instance.groups.clear()
            try:
                group = Group.objects.get(name=role)
                instance.groups.add(group)
            except Group.DoesNotExist:
                raise serializers.ValidationError(f"El rol '{role}' no existe.")

        return instance

    def validate_username(self, value):
        # Validación de largo mínimo
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        
        # Validación de que empiece con mayúscula
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre debe empezar con mayúscula.")
        
        return value
    
    def validate_email(self, value):
        # Validación de largo mínimo
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        
        return value

    def validate_password(self, value):
        # Validación de largo mínimo
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        
        # Validación de seguridad de la contraseña
        if len(value) < 8:
            raise ValidationError("La contraseña debe tener al menos 8 caracteres.")
        
        if not re.search(r'[A-Z]', value):
            raise ValidationError("La contraseña debe contener al menos una letra mayúscula.")
        
        if not re.search(r'[a-z]', value):
            raise ValidationError("La contraseña debe contener al menos una letra minúscula.")
        
        if not re.search(r'[0-9]', value):
            raise ValidationError("La contraseña debe contener al menos un número.")
        
        return value
    
    def validate_unique_username(self, username):
    
        #Verifica que el username no esté ya registrado.
        
        if User.objects.filter(username=username).exists():
            raise ValidationError(f"El nombre de usuario '{username}' ya está registrado.")
    
    def validate_unique_email(self, email):
        
        #Verifica que el email no esté ya registrado.
        
        if User.objects.filter(email=email).exists():
            raise ValidationError(f"El correo electrónico '{email}' ya está registrado.")
        
        #Validacion de espacios vacios
    def validate_username (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
    #Validación para el nombre empieze con Mayúscula
    def validate_username(self, value):
        if not value[0].isupper():
            raise serializers.ValidationError("El nombre debe empezar con mayúscula.")
        return value  
    
    def validate_email (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
    
    def validate_password (self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("El contenido debe tener más de 2 caracteres.")
        return value 
        

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
        
