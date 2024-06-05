from django.db import models

# Create your models here.


class FAQ(models.Model):
    question = models.TextField()
    answer = models.TextField()

    def __str__(self):
        return self.question


class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    review = models.TextField()
    avatar = models.FileField()
    created_at = models.DateTimeField(auto_now_add=True)
    rating_number = models.PositiveIntegerField()

    def __str__(self):
        return self.name