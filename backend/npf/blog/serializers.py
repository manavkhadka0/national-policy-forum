from .models import Author, SocialLinks, Category, Tag, Blog, Publication

from rest_framework import serializers


class AuthorSerializer(serializers.ModelSerializer):
    social_links = serializers.SerializerMethodField()

    class Meta:
        model = Author

        fields = [
            "id",
            "name",
            "avatar",
            "quotes",
            "social_links",
            "total_reviews",
            "role",
            "about",
            "verified",
            "phone_number",
            "rating_number",
        ]

    def get_social_links(self, obj):
        return {
            "facebook": obj.social_links.facebook,
            "instagram": obj.social_links.instagram,
            "linkedin": obj.social_links.linkedin,
            "twitter": obj.social_links.twitter,
            "whatsapp": obj.social_links.whatsapp,
        }


class SocialLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLinks
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class CategoryNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]  # Only include the name field

    def to_representation(self, instance):
        # Return the name directly
        return instance.name


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["name"]  # Add other fields as necessary

    def to_representation(self, instance):
        # Return the name directly
        return instance.name


class BlogSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    category = serializers.CharField(source="category.name", read_only=True)
    author = AuthorSerializer()

    class Meta:
        model = Blog
        fields = [
            "id",
            "slug",
            "title",
            "hero",
            "created_at",
            "updated_at",
            "cover",
            "duration",
            "description",
            "content",
            "category",
            "author",
            "tags",
        ]

    def get_tags(self, obj):
        return obj.tags.values_list("name", flat=True)


class PublicationSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    category = serializers.CharField(source="category.name", read_only=True)
    author = AuthorSerializer()

    class Meta:
        model = Publication
        fields = [
            "id",
            "slug",
            "title",
            "hero",
            "created_at",
            "updated_at",
            "cover",
            "duration",
            "description",
            "content",
            "category",
            "author",
            "tags",
            "pdf",
        ]

    def get_tags(self, obj):
        return obj.tags.values_list("name", flat=True)
