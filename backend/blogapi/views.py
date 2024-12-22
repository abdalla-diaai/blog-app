from django.shortcuts import render
from rest_framework import viewsets, decorators, response
from .serializers import *
from .models import *

# Create your views here.
class PostModelViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field = 'slug'

    @decorators.action (methods=['GET'], detail=False)
    def recent(self, request):
        recent_posts = Post.objects.all().order_by('-created_at')[:6]
        serializer = self.get_serializer(recent_posts, many=True)
        return response.Response(serializer.data)
