# Generated by Django 5.1.2 on 2024-11-12 20:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_qualification'),
    ]

    operations = [
        migrations.CreateModel(
            name='services',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('services_url', models.TextField()),
                ('services_name', models.CharField(max_length=150)),
                ('description', models.TextField()),
                ('id_specialists', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='services', to='api.specialists')),
            ],
        ),
    ]
