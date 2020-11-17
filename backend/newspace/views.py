# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import NewspaceSerializer      # add this
from .models import Newspace                     # add this

class NewspaceView(viewsets.ModelViewSet):       # add this
  serializer_class = NewspaceSerializer          # add this
  queryset = Newspace.objects.all()              # add this