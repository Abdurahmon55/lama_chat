from django.urls import path
from .views import ChatViews, UserViews, ChatDetailViews
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('messages/', ChatViews.as_view()),
    path('messages/<int:pk>/', ChatDetailViews.as_view()),
    path('user/', UserViews.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]