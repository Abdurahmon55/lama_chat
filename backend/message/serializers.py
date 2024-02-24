from rest_framework import serializers
from .models import ChatModel
from django.contrib.auth import get_user_model

class chatModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=ChatModel
        fields='__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=get_user_model()
        fields=['id', 'last_login', 'username']