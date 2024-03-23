
from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from django.contrib.auth import get_user_model
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters




def Views(name, views, model, serializer):
    class name(views):
        queryset=model.objects.all()
        serializer_class=serializer
    return name  

class MessageViews(generics.ListCreateAPIView):
    queryset=Message.objects.all()
    serializer_class=MessageSerailizer
    filter_backends = [DjangoFilterBackend]
    filterset_fields =['sender', 'contact']

ProfileViwes=Views('ProfileViwes', generics.ListCreateAPIView, get_user_model(), ProfileSerailizer)
ProfileDetailViwes=Views('ProfileDetailViwes', generics.RetrieveUpdateDestroyAPIView, get_user_model(), ProfileSerailizer)
ContactDetilViews=Views('ContactDetilViews', generics.RetrieveDestroyAPIView, Contact, ContactSerializer)
MessageDetailViews=Views('MessageDetailView', generics.RetrieveDestroyAPIView, Message, MessageSerailizer)
SaveMessageViews=Views('SaveMessageViews', generics.ListCreateAPIView, SaveMessage, SaveMessageSerailizer)
SaveMessageDetailViews=Views('SaveMessageDetailViews', generics.RetrieveDestroyAPIView, SaveMessage, SaveMessageSerailizer)
SendMessageViews=Views('SendMessageViews', generics.ListCreateAPIView, SendMessage, SendMessageSerializer)
PostViews=Views('PostViews', generics.ListCreateAPIView, Post, PostSerializer)
PostDetailViews=Views('PostDetailViews', generics.RetrieveDestroyAPIView, Post, PostSerializer)
ProfileViewsDetail=Views('ProfileViewsDetail', generics.ListCreateAPIView, ProfileDetail, ProfileDetailSerializer)
DetailProfileViews=Views('DetailProfileViews', generics.RetrieveDestroyAPIView, ProfileDetail, ProfileDetailSerializer)

