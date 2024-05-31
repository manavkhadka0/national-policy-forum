from django.shortcuts import render
from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from .models import Author, SocialLinks, Category, Tag, Blog, FAQ
from .serializers import AuthorSerializer, SocialLinksSerializer, CategorySerializer, TagSerializer, BlogSerializer, FAQSerializer

class BlogListCreate(generics.ListCreateAPIView):
   queryset = Blog.objects.all()
   serializer_class = BlogSerializer

class BlogRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
   queryset = Blog.objects.all()
   serializer_class = BlogSerializer

class AuthorListCreate(generics.ListCreateAPIView):
   queryset = Author.objects.all()
   serializer_class = AuthorSerializer

class AuthorRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
   queryset = Author.objects.all()
   serializer_class = AuthorSerializer

class SocialLinksListCreate(generics.ListCreateAPIView):
   queryset = SocialLinks.objects.all()
   serializer_class = SocialLinksSerializer

class SocialLinksRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
   queryset = SocialLinks.objects.all()
   serializer_class = SocialLinksSerializer

class CategoryListCreate(generics.ListCreateAPIView):
   queryset = Category.objects.all()
   serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
   queryset = Category.objects.all()
   serializer_class = CategorySerializer

class TagListCreate(generics.ListCreateAPIView):
   queryset = Tag.objects.all()
   serializer_class = TagSerializer

class TagRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
   queryset = Tag.objects.all()
   serializer_class = TagSerializer

class FAQListCreate(generics.ListCreateAPIView):
   queryset = FAQ.objects.all()
   serializer_class = FAQSerializer

class FAQRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
   queryset = FAQ.objects.all()
   serializer_class = FAQSerializer