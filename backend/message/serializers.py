from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model

def serializer(name, models):
    class name(serializers.ModelSerializer):
       class Meta:
        model=models
        fields='__all__'
    return name    

SaveMessageSerailizer=serializer('SaveMessageSerailizer', SaveMessage)
SendMessageSerializer=serializer('SendMessageSerializer', SendMessage)
ContactSerializer=serializer('ContactSerializer', Contact)
ProfileDetailSerializer=serializer('ProfileDetailSerializer', ProfileDetail)
PostSerializer=serializer('PostSerializer', Post)

class MessageSerailizer(serializers.ModelSerializer):
    messages = SendMessageSerializer(many=True, read_only = True)
    class Meta:
        model=Message
        fields='__all__'   

class ProfileSerailizer(serializers.ModelSerializer):
    post=PostSerializer(many=True, read_only = True)
    detail=ProfileDetailSerializer(many=True, read_only = True)
    contacts = ContactSerializer(many=True, read_only = True)
    save =  SaveMessageSerailizer(many=True, read_only = True)
    class Meta:
        model=get_user_model()
        fields=['id', 'last_login', 'username', 'save', 'contacts', 'detail', 'post' ] 
