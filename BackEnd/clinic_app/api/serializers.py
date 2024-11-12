from rest_framework import serializers
from django.contrib.auth.models import User

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
        user = User(**validated_data)
        user.save
        return user
    
class testimoniosSerializer(serializers.ModelSerializer):
    class Meta:
        model = testimonios
        fields = '__all__' 
        

class recommendationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = recommendations
        fields = '__all__'
        

class video_blogSerializer(serializers.ModelSerializer):
    class Meta:
        model = video_blog
        fields = '__all__'
        
        
class specialistsSerializer(serializers.ModelSerializer):
    class Meta:
        model = specialists
        fields = '__all__'
        
        
class specialitySerializer(serializers.ModelSerializer):
    class Meta:         
        model = speciality
        fields = '__all__'
        
class institutionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = institutions
        fields = '__all__'
        
class qualificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = qualification
        fields = '__all__'
        

class servicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = services
        fields = '__all__'
        

