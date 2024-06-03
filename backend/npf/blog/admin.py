from django import forms
from django.contrib import admin
from .models import Author, SocialLinks, Category, Tag, Blog, FAQ,Testimonial
from unfold.admin import ModelAdmin
from tinymce.widgets import TinyMCE

admin.site.register(Author, ModelAdmin)
admin.site.register(SocialLinks, ModelAdmin)
admin.site.register(Category, ModelAdmin)
admin.site.register(Tag, ModelAdmin)
admin.site.register(FAQ, ModelAdmin)
admin.site.register(Testimonial, ModelAdmin)

class BlogForm(forms.ModelForm):
    class Meta:
        model = Blog
        fields = '__all__'
        widgets = {
            'content': TinyMCE(),
        }

class BlogAdmin(ModelAdmin):
    form = BlogForm

admin.site.register(Blog, BlogAdmin)


