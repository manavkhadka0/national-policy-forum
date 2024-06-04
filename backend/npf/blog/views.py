from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from .models import Author, SocialLinks, Category, Tag, Blog, FAQ,Testimonial
from .serializers import AuthorSerializer, SocialLinksSerializer,TestimonialSerializer, CategorySerializer, TagSerializer, BlogSerializer, FAQSerializer,CategoryNameSerializer

class BlogListCreate(generics.ListCreateAPIView):
   queryset = Blog.objects.all()
   serializer_class = BlogSerializer

   def get(self, request, *args, **kwargs):
      is_featured = request.GET.get('is_featured')
      is_latest = request.GET.get('is_latest')
      per_page = request.GET.get('per_page')
      category = request.GET.get('category')
      tag = request.GET.get('tag')

      queryset = self.get_queryset()

      if is_featured:
         queryset = queryset.filter(is_featured=True)
      elif is_latest:
         queryset = queryset.order_by('-created_at')[:3]
      elif category:
         queryset = queryset.filter(category__name=category)
         if per_page:
            try:
               per_page = int(per_page)
               queryset = queryset[:per_page]
            except ValueError:
               pass
      elif tag:
         queryset = queryset.filter(tags__name=tag)
         if per_page:
            try:
               per_page = int(per_page)
               queryset = queryset[:per_page]
            except ValueError:
               pass

      serializer = self.get_serializer(queryset, many=True)
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