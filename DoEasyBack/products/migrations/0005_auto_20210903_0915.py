# Generated by Django 3.2.6 on 2021-09-03 09:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0002_alter_category_title'),
        ('products', '0004_alter_smartphones_category'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='manufacturer_country',
            options={'ordering': ['name'], 'verbose_name': 'Страна производитель'},
        ),
        migrations.AlterModelOptions(
            name='smartphones',
            options={'verbose_name': 'Смартфоны'},
        ),
        migrations.CreateModel(
            name='Laptops',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название товара')),
                ('slug', models.SlugField(default='', max_length=200, unique=True, verbose_name='Слаг')),
                ('image_link', models.CharField(max_length=300, verbose_name='Ссылка на изображение')),
                ('description', models.TextField(verbose_name='Описание товара')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Цена')),
                ('stock', models.PositiveIntegerField(verbose_name='Остаток товара')),
                ('relise_year', models.PositiveIntegerField(default=2021, verbose_name='Год релиза')),
                ('color', models.CharField(default='', max_length=40, verbose_name='Цвет')),
                ('available', models.BooleanField(default=True)),
                ('created', models.DateField(auto_now=True)),
                ('display_diagnal', models.CharField(default='', max_length=10, verbose_name='Диагональ экрана')),
                ('screen_resolution', models.CharField(default=' x ', max_length=10, verbose_name='Разрешение экрана')),
                ('display_technology', models.CharField(default='', max_length=20, verbose_name='Тип дисплея')),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.brand', verbose_name='Бренд')),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='categories.category', verbose_name='Категория')),
                ('manufecture_country', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='products.manufacturer_country', verbose_name='Страна производитель')),
            ],
            options={
                'verbose_name': 'Ноутбуки',
            },
        ),
    ]