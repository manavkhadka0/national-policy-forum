from django.contrib import admin
<<<<<<< HEAD
from .models import FAQ, Testimonial, OurTeam,OurClient,Image,Video
=======
from .models import FAQ, Testimonial, OurTeam, OurClient, Donation, Image, Video
>>>>>>> task/other-models
from unfold.admin import ModelAdmin

# Register your models here.

admin.site.register(FAQ, ModelAdmin)
admin.site.register(Testimonial, ModelAdmin)
admin.site.register(OurTeam, ModelAdmin)
admin.site.register(OurClient, ModelAdmin)
admin.site.register(Image, ModelAdmin)
admin.site.register(Video, ModelAdmin)
<<<<<<< HEAD
=======
admin.site.register(Donation, ModelAdmin)
>>>>>>> task/other-models
