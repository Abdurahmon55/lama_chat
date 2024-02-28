from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model=Contact
        fields = '__all__'


class AddImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=AddImage
        fields = '__all__'

class SendImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=SendImage
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Message
        fields = '__all__'

class ProfilSerializer(serializers.ModelSerializer):
    images = AddImageSerializer(many=True, read_only = True)
    profil = ContactSerializer(many=True, read_only = True)
    class Meta:
        model=Profil
        fields = '__all__'

class SaveSerializer(serializers.ModelSerializer):
    class Meta:
        model=SaveMessage
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = ['id', 'last_login', 'username']