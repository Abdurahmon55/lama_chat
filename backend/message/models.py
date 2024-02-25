from django.db import models
from django.contrib.auth.models import User

class Profil(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(blank=True)
    desc=models.TextField(blank=True)


class Contact(models.Model):
    sender=models.ForeignKey(Profil, on_delete=models.CASCADE, related_name='profil')
    contact=models.ManyToManyField(User, blank=True)

class Message(models.Model):
    sender=models.ForeignKey(Profil, on_delete=models.CASCADE,)
    contact=models.ForeignKey(User, on_delete=models.CASCADE,)
    message=models.TextField(blank=True)

class SendImage(models.Model):
    message=models.ForeignKey(Message, on_delete=models.CASCADE, related_name='sendImage')
    imgage=models.ImageField(blank=True)

class AddImage(models.Model):
    profil=models.ForeignKey(Profil, on_delete=models.CASCADE, related_name='images')
    image=models.ImageField(blank=True)