from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model


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
    contact=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, blank=True)
    messageId=models.ForeignKey(Message, on_delete=models.CASCADE)
    message=models.TextField(blank=True)
    image=models.TextField(blank=True)
    call=models.CharField(max_length=50, blank=True)

class ProfileDetail(models.Model):
    sender=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='detail')
    image=models.ImageField(blank=True)
    bio=models.TextField(blank=True)

class Post(models.Model):
    sender=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='post')
    image=models.ImageField(blank=True)