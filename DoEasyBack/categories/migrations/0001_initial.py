# Generated by Django 3.2.6 on 2021-08-23 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_link', models.CharField(max_length=100, verbose_name='Ссылка на иконку категории')),
                ('title', models.CharField(max_length=30, verbose_name='Название категории')),
            ],
            options={
                'verbose_name': 'Категории',
                'ordering': ['id'],
            },
        ),
    ]