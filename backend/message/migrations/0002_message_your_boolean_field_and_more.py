# Generated by Django 5.0.2 on 2024-02-28 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('message', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='your_boolean_field',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='sendimage',
            name='your_boolean_field',
            field=models.BooleanField(default=False),
        ),
    ]
