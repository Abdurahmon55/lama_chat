from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from django.contrib.auth import get_user_model
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

def Views(name, views, model, serializer):
    class name(views):
        queryset = model.objects.all()
        serializer_class = serializer
    return name  

class UserViews(generics.ListAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields=['username']

class ProfileViews(generics.ListCreateAPIView):
    queryset = Profil.objects.all()
    serializer_class = ProfilSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields =['user']
    search_fields=['name']

class MessageViews(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields =['sender', 'contact']

class SendImageViews(generics.ListCreateAPIView):
    queryset =SendImage.objects.all()
    serializer_class = SendImageSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields =['sender', 'contact'] 

class AddImageViews(generics.ListCreateAPIView):
    queryset = AddImage.objects.all()
    serializer_class = AddImageSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields =['profil']   


ContactViews=Views('ContactViews', generics.ListCreateAPIView, Contact, ContactSerializer)
ContactDetailtViews=Views('ContactDetailViews', generics.RetrieveDestroyAPIView, Contact, ContactSerializer)
ProfileDetailViews=Views('ProfileDetailViews', generics.RetrieveAPIView, Profil, ProfilSerializer)
MessageDetailViews=Views('MessageDetailViews', generics.RetrieveUpdateDestroyAPIView, Message, MessageSerializer)

