from django.urls import path

from . import views

urlpatterns = [
    # path('', views.NewspaceView.as_view(), name='homepage'),
    path('category/', views.CategoryView.as_view(), name='category'),
    path('event/', views.EventView.as_view(), name='event'),
    path('', views.ArticleView.as_view(), name='article')
    # path('category/<int:pk>', views.CategoryView, name='category'),
    # path('<int:category_id>/<int:event_id>', views.EventView, name='event'),
    # path('<int:category_id>/<int:event_id>/<int:article_id>', views.ArticleView, name='article')
]