from django.db import models

# Create your models here.

class Bikes(models.Model):
    name = models.TextField()
    Price = models.IntegerField()
    Description = models.TextField()
    Instock = models.BooleanField()
    def __str__(self):
        return self.name
