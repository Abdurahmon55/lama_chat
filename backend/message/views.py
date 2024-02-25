from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *


def Views(name, views, model, serializer):
    class name(views):
        queryset = model.objects.all()
        serializer_class = serializer
    return name  

ContactViews=Views('ContactViews', generics.ListCreateAPIView, Contact, ContactSerializer)
ProfileViews=Views('ProfileViews', generics.ListCreateAPIView, Profil, ProfilSerializer)
MessageViews=Views('MessageViews', generics.ListCreateAPIView, Message, MessageSerializer)
AddImageViews=Views('AddImageViews', generics.ListCreateAPIView, AddImage, AddImageSerializer)
SendImageViews=Views('SendImageViews', generics.ListCreateAPIView, SendImage, SendImageSerializer)