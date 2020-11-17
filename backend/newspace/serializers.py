from rest_framework import serializers
from .models import Newspace

class NewspaceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Newspace
    fields = ('id', 'title', 'description', 'completed')