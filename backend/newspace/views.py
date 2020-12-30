# Create your views here.
from django.shortcuts import render

# Add below.

from rest_framework import viewsets, generics
from . import serializers
from . import models

class NewspaceView(viewsets.ModelViewSet):
  serializer_class = serializers.NewspaceSerializer
  queryset = models.Newspace.objects.all()

class ArticleView(generics.ListAPIView):
  serializer_class = serializers.ArticleSerializer
  queryset = models.Article.objects.all()

class EventView(generics.ListAPIView):
  serializer_class = serializers.EventSerializer
  queryset = models.Event.objects.all()

class CategoryView(generics.ListAPIView):
  serializer_class = serializers.CategorySerializer
  queryset = models.Category.objects.all()


