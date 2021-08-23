from django.db import models


class SliderComponent(models.Model):
    """This model is decribe what is contain in Slider-components"""

    slider_image_link = models.CharField("Ссылка на изображение компонента слайдера", max_length=100)
    slider_comp_text = models.CharField("Текст компонента слайдера", max_length=50)

    class Meta:
        ordering = ["id"]
        verbose_name = "Компонент слайдера"


    def __str__(self): 
        return f'{self.slider_comp_text}: {self.id}'
