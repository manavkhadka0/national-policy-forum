from django.contrib import admin
from .models import FAQ, Testimonial, OurTeam,OurClient
from unfold.admin import ModelAdmin

# Register your models here.

admin.site.register(FAQ, ModelAdmin)
admin.site.register(Testimonial, ModelAdmin)
admin.site.register(OurTeam, ModelAdmin)
admin.site.register(OurClient, ModelAdmin)
