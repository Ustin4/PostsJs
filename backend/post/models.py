from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=128)
    body = models.TextField()

    def __str__(self):
        return self.title



class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    name = models.CharField(max_length=64)
    email = models.EmailField(max_length=254, unique=True, blank=True, null=True)
    body = models.TextField()

    def __str__(self):
        return f'Комментарий к посту: {self.post.title}'