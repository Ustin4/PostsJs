from django.urls import path

from .views import CommentListCreateView, PostListCreateView, PostRetrieveUpdateDestroyView

urlpatterns = [
    path('', PostListCreateView.as_view(), name='post-list-create'),
    path('<int:pk>/', PostRetrieveUpdateDestroyView.as_view(), name='post-retrieve-update-destroy'),
    path('<int:post_id>/comments/', CommentListCreateView.as_view(), name='comment-list-create'),
 ]