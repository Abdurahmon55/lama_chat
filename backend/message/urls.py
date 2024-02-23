from django.urls import path
from .views import ChatViews, UserViews
urlpatterns = [
    path('message/', ChatViews.as_view()),
    path('user/', UserViews.as_view())
]