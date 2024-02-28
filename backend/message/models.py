from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

class Profil(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='name')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Contact(models.Model):
    sender=models.ForeignKey(Profil, on_delete=models.CASCADE, related_name='profil')
    contact=models.ManyToManyField(get_user_model(), blank=True)
    your_boolean_field = models.BooleanField(default=False)

class Message(models.Model):
    sender=models.ForeignKey(Profil, on_delete=models.CASCADE,)
    contact=models.ForeignKey(get_user_model(), on_delete=models.CASCADE,)  
    message=models.TextField(blank=True)
    time=models.DateTimeField(auto_now_add=True)

class SendImage(models.Model):
    sender=models.ForeignKey(Profil, on_delete=models.CASCADE,)
    contact=models.ForeignKey(get_user_model(), on_delete=models.CASCADE,)  
    image=models.ImageField(blank=True)
    time=models.DateTimeField(auto_now_add=True)

class AddImage(models.Model):
    profil=models.ForeignKey(Profil, on_delete=models.CASCADE, related_name='images')
    image=models.ImageField(blank=True)
    desc=models.TextField(blank=True)