from rest_framework import serializers
from .models import FAQ, Testimonial


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = "__all__"


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"

    # sort by created_at
    ordering = ["-created_at"]
