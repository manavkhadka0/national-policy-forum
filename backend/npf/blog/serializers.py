from .models import Author, SocialLinks, Category, Tag, Blog, FAQ,Testimonial

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

class CategoryNameSerializer(serializers.ModelSerializer):
      class Meta:
        model = Category
        fields = ['name']  # Only include the name field

      def to_representation(self, instance):
        # Return the name directly
        return instance.name
      
class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']  # Add other fields as necessary  



class BlogSerializer(serializers.ModelSerializer):
      tags = serializers.SerializerMethodField()
      category = serializers.CharField(source='category.name', read_only=True)
      author = AuthorSerializer()
      
      class Meta:
        model = Blog
        fields = [
            'id', 'slug', 'title', 'hero', 'created_at', 'updated_at',
            'cover', 'duration', 'description', 'content', 'category',
            'author', 'share_links', 'tags'
        ]
      
      def get_tags(self, obj):
        return obj.tags.values_list('name', flat=True)

class FAQSerializer(serializers.ModelSerializer):
      class Meta:
         model = FAQ
         fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
      class Meta:
         model = Testimonial
         fields = '__all__'

      # sort by created_at
      ordering = ['-created_at']