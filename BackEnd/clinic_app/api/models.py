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
    
class specialists(models.Model):
    specialists_url = models.TextField()
    full_name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.full_name


class speciality(models.Model):
    speciality_name = models.CharField(max_length=150)
    id_specialists = models.ForeignKey(specialists, on_delete=models.CASCADE, related_name='speciality')
    
    def __str__(self):
        return self.speciality_name
    
    
class institutions(models.Model):
    institution = models.CharField(max_length=150)
    country = models.CharField(max_length=150) 
    province = models.CharField(max_length=150)
    

class qualification(models.Model):
    qualification_name = models.CharField(max_length=150)
    id_institution = models.ForeignKey(institutions, on_delete=models.CASCADE, related_name='qualification')
    id_specialist = models.ForeignKey(specialists, on_delete=models.CASCADE, related_name='qualification')
    

class services(models.Model):
    services_url = models.TextField()
    services_name = models.CharField(max_length=150)
    description = models.TextField()
    id_specialists = models.ForeignKey(specialists, on_delete=models.CASCADE, related_name='services')
    
    def __str__(self):
        return self.services_name
    
    
