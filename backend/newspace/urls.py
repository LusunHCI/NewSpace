from django.urls import path, include
from rest_framework import routers

from . import views

# add below
# router will auto config urls for viewsets
router = routers.DefaultRouter()
router.register(r'newspaces', views.NewspaceView, 'newspace')
router.register(r'article', views.ArticleView, 'article')
router.register(r'event', views.EventView, 'event')
router.register(r'category', views.CategoryView, 'category')
router.register(r'user', views.UserView, 'user')

urlpatterns = [
    path('api/', include(router.urls))
]