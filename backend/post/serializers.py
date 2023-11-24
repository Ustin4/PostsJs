from rest_framework import serializers
from .models import Comment, Post


class CommentSerializer(serializers.ModelSerializer):
    postId = serializers.SerializerMethodField()

    def get_postId(self, obj):
        return obj.post.id

    class Meta:
        model = Comment
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'comments']


