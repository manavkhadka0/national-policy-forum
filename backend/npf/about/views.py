from rest_framework import generics
from .models import FAQ, Testimonial, OurTeam, OurClient
from .serializers import (
    FAQSerializer,
    TestimonialSerializer,
    OurTeamSerializer,
    OurClientSerializer,
)

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


class OutClientListCreate(generics.ListCreateAPIView):
    queryset = OurClient.objects.all()
    serializer_class = OurClientSerializer


class OutClientRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = OurClient.objects.all()
    serializer_class = OurClientSerializer
