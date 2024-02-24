from django.shortcuts import render
from rest_framework import generics
from .models import ChatModel
from .serializers import chatModelSerializer, UserSerializer
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth import get_user_model
# Create your views here.
class ChatViews(generics.ListCreateAPIView):
    queryset=ChatModel.objects.all()
    serializer_class=chatModelSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['sender','take_message']

class UserViews(generics.ListAPIView):
    queryset=get_user_model().objects.all()
    serializer_class=UserSerializer
