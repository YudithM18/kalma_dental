# Generated by Django 5.1.2 on 2024-11-12 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_video_blog'),
    ]

    operations = [
        migrations.CreateModel(
            name='specialists',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('specialists_url', models.TextField()),
                ('full_name', models.CharField(max_length=100)),
            ],
        ),
    ]