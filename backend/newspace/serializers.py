from rest_framework import serializers
from .models import Newspace, Article, Event, Category, User, Source, Author

# Serializer is used to convert data into JSON
class NewspaceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Newspace
    fields = ('id', 'title', 'description', 'completed')
  
class ArticleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Article
    fields = ('id', 'title', 'pub_date', 'source', 'read_count', 'agree_count', 'disagree_count', 'content', 'location')

class EventSerializer(serializers.ModelSerializer):
  class Meta:
    model = Event
    fields = ('id', 'title', 'pub_date', 'popularity_score', 'category')
  
class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = ('id', 'name')

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'name', 'bias_score', 'preference', \
              'read_count_left', 'read_count_center', 'read_count_right', \
              'agree_count_left', 'agree_count_center', 'agree_count_right', \
              'disagree_count_left', 'disagree_count_center', 'disagree_count_right')

class SourceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Source
    fields = ('id', 'name')

class AuthorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Author
    fields = ('id', 'name')