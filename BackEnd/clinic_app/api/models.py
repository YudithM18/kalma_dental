from django.db import models

class testimonios(models.Model):
    fullname = models.CharField(max_length=100)  
    date = models.DateField() 
    testimony = models.CharField(max_length=500) 
    
    def __str__(self):
        return self.fullname


