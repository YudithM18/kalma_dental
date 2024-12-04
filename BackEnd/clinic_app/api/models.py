from django.db import models

class testimonios(models.Model):
    fullname = models.CharField(max_length=100)  
    date = models.DateField() 
    testimony = models.CharField(max_length=500) 
    
    def __str__(self):
        return self.fullname

class recommendations(models.Model):
    recommendations_url = models.TextField()
    tips_title = models.CharField(max_length=100)
    tips_description = models.TextField()
    
    def __str__(self):
        return self.tips_title
    
class video_blog(models.Model):
    title = models.CharField(max_length=100)
    video_url = models.TextField()
    content = models.CharField(max_length= 200)    
    
    def __str__(self):
        return self.title
    

class speciality(models.Model):
    speciality_name = models.CharField(max_length=150)
    
    def __str__(self):
        return self.speciality_name
    
    

class qualification(models.Model):
    qualification_name = models.CharField(max_length=150)
    

class specialists(models.Model):
    specialists_url = models.TextField()
    full_name = models.CharField(max_length=100)
    id_speciality = models.ForeignKey(speciality, on_delete=models.CASCADE, related_name= 'specialists')
    id_qualification = models.ForeignKey(qualification, on_delete=models.CASCADE, related_name='specialists')
    
    
    def __str__(self):
        return self.full_name
    
  
class services(models.Model):
    services_url = models.TextField()
    services_name = models.CharField(max_length=150)
    description = models.TextField()
    id_specialists = models.ForeignKey(specialists, on_delete=models.CASCADE, related_name='services')
    
    def __str__(self):
        return self.services_name

