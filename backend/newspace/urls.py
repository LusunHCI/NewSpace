from django.urls import path, include
from rest_framework import routers

from . import views

# router will auto config urls for viewsets
router = routers.DefaultRouter()                      # add this
router.register(r'newspaces', views.NewspaceView, 'newspace')     # add this
router.register(r'article', views.ArticleView, 'article')
router.register(r'event', views.EventView, 'event')
router.register(r'category', views.CategoryView, 'category')

urlpatterns = [
    path('api/', include(router.urls))
]