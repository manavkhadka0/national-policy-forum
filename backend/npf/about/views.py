from django.shortcuts import render
from rest_framework import generics
from .models import FAQ, Testimonial
from .serializers import FAQSerializer, TestimonialSerializer

# Create your views here.


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
