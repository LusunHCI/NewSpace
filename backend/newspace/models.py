from django.db import models

# Create your models here.
# Define database attributes
class Newspace(models.Model):
  title = models.CharField(max_length=120)
  description = models.TextField()
  completed = models.BooleanField(default=False)

  def _str_(self):
    return self.title
    
class Category(models.Model):
  name = models.CharField(max_length=200)
  
  def __str__(self):
    return self.name

class Author(models.Model):
  name = models.CharField(max_length=200)
  
  def __str__(self):
    return self.name

class Source(models.Model):
  name = models.CharField(max_length=200)
  
  def __str__(self):
    return self.name

class Event(models.Model):
  title = models.CharField(max_length=200)
  categories = models.ManyToManyField('Category', related_name='events')
  pub_date = models.DateTimeField('publish date')
  popularity_score = models.FloatField(default=0.0)
  
  def __str__(self):
    return self.title

class Article(models.Model):
  title = models.CharField(max_length=200)
  events = models.ManyToManyField(Event, related_name='articles')
  authors = models.ManyToManyField(Author, related_name='articles')
  pub_date = models.DateTimeField('publish_date')
  read_count = models.IntegerField(default=0)
  agree_count = models.IntegerField(default=0)
  disagree_count = models.IntegerField(default=0)
  location = models.CharField(max_length=200)
  content = models.CharField(max_length=100000)
  source = models.ForeignKey(Source, on_delete=models.CASCADE, related_name='articles')
  
  def __str__(self):
    return self.title

class User(models.Model):
  name = models.CharField(max_length=200)
  bias_score = models.FloatField(default=0.0)
  preference = models.FloatField(default=0.0)
  read_count_left = models.IntegerField(default=0)
  read_count_center = models.IntegerField(default=0)
  read_count_right = models.IntegerField(default=0)
  agree_count_left = models.IntegerField(default=0)
  agree_count_center = models.IntegerField(default=0)
  agree_count_right = models.IntegerField(default=0)
  disagree_count_left = models.IntegerField(default=0)
  disagree_count_center = models.IntegerField(default=0)
  disagree_count_right = models.IntegerField(default=0)
  
  def __str__(self):
    return self.name