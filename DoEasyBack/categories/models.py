from django.db import models


class Category(models.Model): 
    """This model describe category"""
    image_link = models.CharField('Ссылка на иконку категории', max_length=100)
    title = models.CharField('Название категории', max_length=30, unique=True)
    slug = models.SlugField(unique=True, default='',null=True)

    class Meta:
        verbose_name = "Категории"
        ordering = ["id"]

    def __str__(self):
        return self.title
