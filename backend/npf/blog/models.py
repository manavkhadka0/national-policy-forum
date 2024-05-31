from django.db import models

class Author(models.Model):
   name = models.CharField(max_length=100)
   role = models.CharField(max_length=100)
   about = models.TextField(blank=True)
   quotes = models.TextField(blank=True)
   avatar = models.FileField()
   verified = models.BooleanField(default=False)
   phone_number = models.CharField(max_length=20, null=True, blank=True)
   rating_number = models.FloatField(default=0.0)
   social_links = models.ForeignKey('SocialLinks', on_delete=models.SET_NULL, null=True, blank=True)
   total_reviews = models.PositiveIntegerField(default=0)

   def __str__(self):
      return self.name

class SocialLinks(models.Model):
   facebook = models.URLField(null=True, blank=True)
   instagram = models.URLField(null=True, blank=True)
   linkedin = models.URLField(null=True, blank=True)
   twitter = models.URLField(null=True, blank=True)
   whatsapp = models.URLField(null=True, blank=True)

   def __str__(self):
      return self.facebook

class Category(models.Model):
   name = models.CharField(max_length=100)
   category_thumbnail = models.FileField()
   description = models.TextField()
   
   def __str__(self):
      return self.name

class Tag(models.Model):
   name = models.CharField(max_length=100)
   
   def __str__(self):
      return self.name

class Blog(models.Model):
   slug = models.SlugField(unique=True)
   title = models.CharField(max_length=200)
   hero = models.FileField()
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)
   category = models.ForeignKey(Category, on_delete=models.CASCADE)
   tags = models.ManyToManyField(Tag)
   cover = models.FileField()
   duration = models.CharField(max_length=20)
   description = models.TextField()
   author = models.ForeignKey(Author, on_delete=models.CASCADE)
   share_links = models.ForeignKey(SocialLinks, on_delete=models.SET_NULL, null=True, blank=True)

   def __str__(self):
      return self.title

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