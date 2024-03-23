from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Message)
admin.site.register(SendMessage)
admin.site.register(SaveMessage)
admin.site.register(Contact)
admin.site.register(ProfileDetail)
admin.site.register(Post)


