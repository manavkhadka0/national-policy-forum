from django.urls import path
from . import views

#urls

urlpatterns = [
   path('blog/', views.BlogListCreate.as_view(), name='blog_list_create'),
   path('blog/<int:pk>/', views.BlogRetrieveUpdateDestroy.as_view(), name='blog_retrieve_update_destroy'),
   path('author/', views.AuthorListCreate.as_view(), name='author_list_create'),
   path('author/<int:pk>/', views.AuthorRetrieveUpdateDestroy.as_view(), name='author_retrieve_update_destroy'),
   path('social-links/', views.SocialLinksListCreate.as_view(), name='social_links_list_create'),
   path('social-links/<int:pk>/', views.SocialLinksRetrieveUpdateDestroy.as_view(), name='social_links_retrieve_update_destroy'),
   path('category/', views.CategoryListCreate.as_view(), name='category_list_create'),
   path('category/<int:pk>/', views.CategoryRetrieveUpdateDestroy.as_view(), name='category_retrieve_update_destroy'),
   path('category-name/', views.CategoryListView.as_view(), name='category_name_list_create'),
   path('tag/', views.TagListCreate.as_view(), name='tag_list_create'),
   path('tag/<int:pk>/', views.TagRetrieveUpdateDestroy.as_view(), name='tag_retrieve_update_destroy'),
   path('faq/', views.FAQListCreate.as_view(), name='faq_list_create'),
   path('faq/<int:pk>/', views.FAQRetrieveUpdateDestroy.as_view(), name='faq_retrieve_update_destroy'),
   path('testimonial/', views.TestimonialListCreate.as_view(), name='testimonial_list_create'),
   path('testimonial/<int:pk>/', views.TestimonialRetrieveUpdateDestroy.as_view(), name='testimonial_retrieve_update_destroy'),
]