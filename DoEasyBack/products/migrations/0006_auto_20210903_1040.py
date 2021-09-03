# Generated by Django 3.2.6 on 2021-09-03 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20210903_0915'),
    ]

    operations = [
        migrations.AddField(
            model_name='laptops',
            name='battery_capacity',
            field=models.CharField(max_length=20, null=True, verbose_name='Ёмкость аккумулятора'),
        ),
        migrations.AddField(
            model_name='laptops',
            name='cpu',
            field=models.CharField(max_length=250, null=True, verbose_name='Процессор'),
        ),
        migrations.AddField(
            model_name='laptops',
            name='main_camera_mpix',
            field=models.CharField(max_length=10, null=True, verbose_name='Основная камера'),
        ),
        migrations.AddField(
            model_name='laptops',
            name='number_of_processor_cores',
            field=models.PositiveIntegerField(null=True, verbose_name='Количество ядер процессора'),
        ),
        migrations.AddField(
            model_name='laptops',
            name='ram',
            field=models.PositiveIntegerField(null=True, verbose_name='Оперативная память (GB)'),
        ),
        migrations.AddField(
            model_name='laptops',
            name='rom',
            field=models.PositiveIntegerField(null=True, verbose_name='Встроенной памяти (GB)'),
        ),
        migrations.AddField(
            model_name='smartphones',
            name='battery_capacity',
            field=models.CharField(max_length=20, null=True, verbose_name='Ёмкость аккумулятора'),
        ),
        migrations.AddField(
            model_name='smartphones',
            name='cpu',
            field=models.CharField(max_length=250, null=True, verbose_name='Процессор'),
        ),
        migrations.AddField(
            model_name='smartphones',
            name='front_camera_mpix',
            field=models.CharField(max_length=10, null=True, verbose_name='Фронтальная камера'),
        ),
        migrations.AddField(
            model_name='smartphones',
            name='main_camera_mpix',
            field=models.CharField(max_length=10, null=True, verbose_name='Основная камера'),
        ),
        migrations.AddField(
            model_name='smartphones',
            name='number_of_main_cameras',
            field=models.PositiveIntegerField(null=True, verbose_name='Количество основыных камер'),
        ),
        migrations.AddField(
            model_name='smartphones',
            name='number_of_processor_cores',
            field=models.PositiveIntegerField(null=True, verbose_name='Количество ядер процессора'),
        ),
        migrations.AddField(
            model_name='smartphones',
            name='ram',
            field=models.PositiveIntegerField(null=True, verbose_name='Оперативная память (GB)'),
        ),
        migrations.AddField(
            model_name='smartphones',
            name='rom',
            field=models.PositiveIntegerField(null=True, verbose_name='Встроенной памяти (GB)'),
        ),
        migrations.AddField(
            model_name='smartphones',
            name='video_resolution',
            field=models.CharField(max_length=20, null=True, verbose_name='Максимальное разрешение видео-съемки'),
        ),
    ]