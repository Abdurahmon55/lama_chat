from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('profil/', ProfileViwes.as_view()),
    # path('user/', UserViews.as_view()),
    # path('profil/<int:pk>/', ProfileDetailViews.as_view()),
    # path('profil/contact/', ContactViews.as_view()),
    # path('profil/contact/<int:pk>/', ContactDetailtViews.as_view()),
    # path('profil/image/', AddImageViews.as_view()),
    # path('profil/image/<int:pk>/', AddImageDetailViews.as_view()),
    # path('profil/save/', SaveViews.as_view()),
    # path('profil/save/<int:pk>/', SaveDetailViews.as_view()),
    # path('send/messages/', MessageViews.as_view()),
    # path('send/messages/<int:pk>/', MessageDetailViews.as_view()),
    # path('send/sendImage/', SendImageViews.as_view()),
    # path('send/sendImage/<int:pk>/', SendImageDetailViews.as_view()),
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]