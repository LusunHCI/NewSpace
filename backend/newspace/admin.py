from django.contrib import admin

# Register your models here.
from django.contrib import admin

# Add below.

from .models import Newspace, Article, Event, Category, User, Source, Author

class NewspaceAdmin(admin.ModelAdmin):  # add this
  list_display = ('title', 'description', 'completed')

class ArticleAdmin(admin.ModelAdmin):
  list_display = ('title', 'pub_date', 'source', 'read_count', 'agree_count', 'disagree_count')

class EventAdmin(admin.ModelAdmin):
  list_display = ('title', 'pub_date', 'popularity_score')

class UserAdmin(admin.ModelAdmin):
  list_display = ('name', 'bias_score', 'preference', \
                  'read_count_left', 'read_count_center', 'read_count_right', \
                  'agree_count_left', 'agree_count_center', 'agree_count_right', \
                  'disagree_count_left', 'disagree_count_center', 'disagree_count_right')

# Register your models here.
admin.site.register(Newspace, NewspaceAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Category)
admin.site.register(User, UserAdmin)
admin.site.register(Source)
admin.site.register(Author)