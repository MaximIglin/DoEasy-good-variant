from django.db import models

class Review(models.Model):
    """This model is describe Reviews data"""

    review_preview_link = models.CharField("Ссылка на превью обзора",max_length=300)
    title = models.CharField("Название обзора", max_length=150)
    review_short_text = models.TextField("Краткое содержание")
    review_all_text = models.TextField("Полное содержание")
    author = models.CharField("Автор обзора",max_length=100)
    
    class Meta:
        verbose_name = "Обзоры"
        ordering = ['-id']

    def __str__(self) -> str:
        return f"{self.id}: {self.title}"