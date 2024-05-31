from django.contrib import admin
from django.db import models
from .models import Author, SocialLinks, Category, Tag, Blog, FAQ
from unfold.admin import ModelAdmin
from tinymce.widgets import TinyMCE

admin.site.register(Author, ModelAdmin)
admin.site.register(SocialLinks, ModelAdmin)
admin.site.register(Category, ModelAdmin)
admin.site.register(Tag, ModelAdmin)
admin.site.register(FAQ, ModelAdmin)

class BlogAdmin(ModelAdmin):
   formfield_overrides = {
      models.TextField: {
            "widget": TinyMCE,
      },
   }

admin.site.register(Blog, BlogAdmin)


