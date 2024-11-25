# Generated by Django 5.1.2 on 2024-11-22 22:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_qualification'),
    ]

    operations = [
        migrations.CreateModel(
            name='specialists',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('specialists_url', models.TextField()),
                ('full_name', models.CharField(max_length=100)),
                ('id_qualification', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='specialists', to='api.qualification')),
                ('id_speciality', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='specialists', to='api.speciality')),
            ],
        ),
    ]