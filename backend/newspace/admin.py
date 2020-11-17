from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Newspace # add this

class NewspaceAdmin(admin.ModelAdmin):  # add this
  list_display = ('title', 'description', 'completed') # add this

# Register your models here.
admin.site.register(Newspace, NewspaceAdmin) # add this