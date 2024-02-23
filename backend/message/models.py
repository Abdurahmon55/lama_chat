from django.db import models
from django.contrib.auth import get_user_model

class ChatModel(models.Model):
    sender = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='sender')
    message = models.TextField()
    take_message = models.ManyToManyField(get_user_model(), blank=True)
    time = models.DateTimeField(auto_now_add=True)
