from rest_framework import generics
from .models import FAQ, Testimonial, OurTeam
from .serializers import FAQSerializer, TestimonialSerializer, OurTeamSerializer

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


class OurTeamListCreate(generics.ListCreateAPIView):
    queryset = OurTeam.objects.all()
    serializer_class = OurTeamSerializer


class OurTeamRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = OurTeam.objects.all()
    serializer_class = OurTeamSerializer
