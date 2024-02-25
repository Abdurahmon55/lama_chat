from rest_framework import serializers
from .models import *

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
        model=AddImage
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    sendImage=SendImageSerializer(many=True, read_only = True)
    class Meta:
        model=Message
        fields = '__all__'

class ProfilSerializer(serializers.ModelSerializer):
    images = AddImageSerializer(many=True, read_only = True)
    profil = ContactSerializer(many=True, read_only = True)
    class Meta:
        model=Profil
        fields = '__all__'