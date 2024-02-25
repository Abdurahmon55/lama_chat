from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('profil/', ProfileViews.as_view()),
    path('profile/contact/', ContactViews.as_view()),
    path('profile/image/', AddImageViews.as_view()),
    path('messages/', MessageViews.as_view()),
    path('messages/sendImage', SendImageViews.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]