from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('profil/', ProfileViwes.as_view()),
    path('profil/<int:pk>/', ProfileDetailViwes.as_view()),
    path('profil/contact/<int:pk>/', ContactDetilViews.as_view()),
    path('profil/message/', MessageViews.as_view()),
    path('profil/message/<int:pk>/', MessageDetailViews.as_view()),
    path('profil/message/save/', SaveMessageViews.as_view()),
    path('profil/message/save/<int:pk>/', SaveMessageDetailViews.as_view()),
    path('profil/message/sendMessage/', SendMessageViews.as_view()),
    path('profil/post/', PostViews.as_view()),
    path('profil/post/<int:pk>/', PostDetailViews.as_view()),
    path('profil/detail/', ProfileViewsDetail.as_view()),
    path('profil/detail/<int:pk>/', DetailProfileViews.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]