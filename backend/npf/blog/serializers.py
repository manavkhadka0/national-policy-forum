from .models import Author, SocialLinks, Category, Tag, Blog, FAQ

from rest_framework import serializers

class AuthorSerializer(serializers.ModelSerializer):
      class Meta:
         model = Author
         fields = '__all__'

class SocialLinksSerializer(serializers.ModelSerializer):
      class Meta:
         model = SocialLinks
         fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
      class Meta:
         model = Category
         fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
      class Meta:
         model = Tag
         fields = '__all__'   

class BlogSerializer(serializers.ModelSerializer):
      class Meta:
         model = Blog
         fields = '__all__'

class FAQSerializer(serializers.ModelSerializer):
      class Meta:
         model = FAQ
         fields = '__all__'