from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

# class Profil(models.Model):
#     user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='name')
#     name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name

# class Contact(models.Model):
#     sender=models.ForeignKey(Profil, on_delete=models.CASCADE, related_name='profil')
#     contact=models.ManyToManyField(get_user_model(), blank=True)
#     your_boolean_field = models.BooleanField(default=False)

# class Message(models.Model):
#     sender=models.ForeignKey(Profil, on_delete=models.CASCADE,)
#     contact=models.ForeignKey(get_user_model(), on_delete=models.CASCADE,)  
#     message=models.TextField(blank=True)
#     time=models.DateTimeField(auto_now_add=True)
#     your_boolean_field = models.BooleanField(default=False)

# class SendImage(models.Model):
#     sender=models.ForeignKey(Profil, on_delete=models.CASCADE,)
#     contact=models.ForeignKey(get_user_model(), on_delete=models.CASCADE,)  
#     image=models.ImageField(blank=True)
#     time=models.DateTimeField(auto_now_add=True)
#     your_boolean_field = models.BooleanField(default=False)

# class AddImage(models.Model):
#     profil=models.ForeignKey(Profil, on_delete=models.CASCADE, related_name='images')
#     image=models.ImageField(blank=True)
#     desc=models.TextField(blank=True)

# class SaveMessage(models.Model):
#     profil=models.ForeignKey(Profil, on_delete=models.CASCADE, related_name='save')
#     time=models.DateTimeField(auto_now_add=True)
#     messageId = models.IntegerField(blank=True)
#     message = models.TextField(blank=True)

class Message(models.Model):
    sender=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='send')
    contact=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='get')  
    time=models.DateTimeField(auto_now_add=True)
    your_boolean_field = models.BooleanField(default=False)

class SendMessage(models.Model):
    sendMessage = models.ForeignKey(Message, on_delete=models.CASCADE, related_name='messages')
    message=models.TextField(blank=True)
    image=models.ImageField(blank=True)
    time=models.DateTimeField(auto_now_add=True)

class Contact(models.Model):
    sender=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='contacts')
    contact=models.ManyToManyField(get_user_model(), blank=True)
    your_boolean_field = models.BooleanField(default=False)

class SaveMessage(models.Model):
    sender=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='save')
    message=models.TextField(blank=True)
    image=models.ImageField(blank=True)