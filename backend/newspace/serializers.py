from rest_framework import serializers
from .models import Newspace, Article, Event, Category, User, Source, Author

# Serializer is used to convert data into JSON
class NewspaceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Newspace
    fields = ('id', 'title', 'description', 'completed')

class EventSerializer(serializers.ModelSerializer):
  articles = serializers.SlugRelatedField(
    many=True,
    slug_field='title',
    queryset = Article.objects.all()
  )

  class Meta:
    model = Event
    fields = ('id', 'title', 'pub_date', 'popularity_score', 'categories', 'articles')
  
class CategorySerializer(serializers.ModelSerializer):
  events = serializers.SlugRelatedField(
    many=True,
    slug_field='title',
    queryset = Event.objects.all()
  )

  class Meta:
    model = Category
    fields = ('id', 'name', 'events')

class ArticleSerializer(serializers.ModelSerializer):
  # event = serializers.SlugRelatedField(
  #   many=True,
  #   slug_field='title',
  #   queryset = Event.objects.all()
  # )
  events = EventSerializer(many=True)

  class Meta:
    model = Article
    fields = ('id', 'title', 'events', 'pub_date', 'source', 'read_count', 'agree_count', 'disagree_count', 'content', 'location')

  def create(self, validated_data):
    events_data = validated_data.pop('events')
    article = Article.objects.create(**validated_data)
    for event_data in events_data:
      Event.objects.create(**event_data)
    return article

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