# Create your views here.
from django.shortcuts import render

# Add below.
import random

from rest_framework import viewsets, generics
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.reverse import reverse
from django.shortcuts import HttpResponseRedirect
from . import serializers
from . import models

# TODO: Change them into ReadOnlyModelViewSet in the future
# Now we can leave it for convenience.

class NewspaceView(viewsets.ModelViewSet):
  serializer_class = serializers.NewspaceSerializer
  queryset = models.Newspace.objects.all()

class ArticleView(viewsets.ModelViewSet):
  serializer_class = serializers.ArticleSerializer
  queryset = models.Article.objects.all()

  def retrieve(self, request, *args, **kwargs):
    obj = self.get_object()
    obj.read_count = obj.read_count + 1
    obj.save(update_fields=("read_count", ))
    return super().retrieve(request, *args, **kwargs)

class EventView(viewsets.ModelViewSet):
  serializer_class = serializers.EventSerializer
  queryset = models.Event.objects.all()

  def retrieve(self, request, *args, **kwargs):
    obj = self.get_object()
    obj.popularity_score = obj.popularity_score + 1
    obj.save(update_fields=("popularity_score", ))
    return super().retrieve(request, *args, **kwargs)
  
  @action(detail=True)
  def sample_an_article(self, request, pk=None):
    """ Sample a random article from the event. """
    obj = self.get_object()
    articles = obj.articles.all()
    
    if len(articles) > 0:
      random_id = random.randint(0, len(articles)-1)
      article = articles[random_id]
      response = HttpResponseRedirect(reverse('article-detail', kwargs={'pk': article.pk}))
      return response
    else:
      return Response(data = 'No articles in this event.')


class CategoryView(viewsets.ModelViewSet):
  serializer_class = serializers.CategorySerializer
  queryset = models.Category.objects.all()

class UserView(viewsets.ModelViewSet):
  serializer_class = serializers.UserSerializer
  queryset = models.User.objects.all()

