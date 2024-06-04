from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from .models import Author, SocialLinks, Category, Tag, Blog, FAQ,Testimonial
from .serializers import AuthorSerializer, SocialLinksSerializer,TestimonialSerializer, CategorySerializer, TagSerializer, BlogSerializer, FAQSerializer,CategoryNameSerializer

class BlogListCreate(generics.ListCreateAPIView):
   queryset = Blog.objects.all()
   serializer_class = BlogSerializer

class BlogFeatured(APIView):
   def get(self, request):
      blogs = Blog.objects.filter(is_featured=True)
      serializer = BlogSerializer(blogs, many=True)
      return Response(serializer.data)
   
class BlogLatest(APIView):
   def get(self, request):
      blogs = Blog.objects.all().order_by('-created_at')[:3]
      serializer = BlogSerializer(blogs, many=True)
      return Response(serializer.data)
class BlogRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
   queryset = Blog.objects.all()
   serializer_class = BlogSerializer

class BlogCategory(APIView):
   def get(self, request):
      per_page = request.GET.get('per_page')
      category = request.GET.get('category')
      if per_page:
         blogs = Blog.objects.filter(category__name=category)[:int(per_page)]
      else:
         blogs = Blog.objects.filter(category__name=category)
      serializer = BlogSerializer(blogs, many=True)
      return Response(serializer.data)

class BlogTag(APIView):
   def get(self, request):
      per_page = request.GET.get('per_page')
      tag = request.GET.get('tag')
      if per_page:
         blogs = Blog.objects.filter(tags__name=tag)[:int(per_page)]
      else:
         blogs = Blog.objects.filter(tags__name=tag)
      serializer = BlogSerializer(blogs, many=True)
      return Response(serializer.data)
   
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

class CategoryListView(APIView):
   def get(self, request):
      categories = Category.objects.all()     
      serializer = CategoryNameSerializer(categories, many=True)
      return Response(serializer.data)

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


class TestimonialListCreate(generics.ListCreateAPIView):
   queryset = Testimonial.objects.all()
   serializer_class = TestimonialSerializer


class TestimonialRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
   queryset = Testimonial.objects.all()
   serializer_class = TestimonialSerializer