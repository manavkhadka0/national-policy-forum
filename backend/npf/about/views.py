from rest_framework import generics
from .models import FAQ, Testimonial, OurTeam, OurClient, Image, Video, Donation
from .serializers import (
    FAQSerializer,
    TestimonialSerializer,
    OurTeamSerializer,
    OurClientSerializer,
    ImageSerializer,
    DonationSerializer,
    VideoSerializer,
)

from rest_framework.views import APIView
from rest_framework.response import Response
from itertools import chain

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


class ImageListView(generics.ListAPIView):
    queryset = Image.objects.all().order_by("-created_at")
    serializer_class = ImageSerializer


class VideoListView(generics.ListAPIView):
    queryset = Video.objects.all().order_by("-created_at")
    serializer_class = VideoSerializer


class ImageVideoListView(APIView):
    def get(self, request, *args, **kwargs):
        images = Image.objects.all()
        videos = Video.objects.all()

        # Serialize the data
        image_serializer = ImageSerializer(images, many=True)
        video_serializer = VideoSerializer(videos, many=True)

        # Combine and sort by created_at
        combined = list(chain(image_serializer.data, video_serializer.data))
        combined.sort(key=lambda x: x["created_at"], reverse=True)

        return Response({"media": combined})


# donation view


class DonationListCreate(generics.ListCreateAPIView):
    queryset = Donation.objects.all().order_by("-created_at")
    serializer_class = DonationSerializer


class DonationRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Donation.objects.all().order_by("-created_at")
    serializer_class = DonationSerializer
