# Generated by Django 4.2.13 on 2024-05-31 07:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_remove_blog_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='social_links',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='blog.sociallinks'),
        ),
    ]
