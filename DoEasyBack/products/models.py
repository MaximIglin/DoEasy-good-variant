from django.db import models
from django.db.models.fields.related import ForeignKey
from categories.models import Category
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
User = get_user_model()


class Product(models.Model):
    """This model is describe all products"""

    category = models.ForeignKey(Category, related_name="Категории", on_delete=models.CASCADE, null=True)
    name = models.CharField("Название товара", max_length=50)
    slug = models.SlugField("Слаг",unique=True, max_length=200, default='')
    image_link = models.CharField("Ссылка на изображение", max_length=300)
    description = models.TextField("Описание товара")
    price = models.DecimalField(max_digits=10,decimal_places=2, verbose_name="Цена")
    stock = models.PositiveIntegerField("Остаток товара")
    available = models.BooleanField(default=True)
    created = models.DateField(auto_now=True)
    

    class Meta:
        ordering = ['available','id', 'name']
        verbose_name = "Продукты"
        

    def __str__(self) -> str:
        return self.name    



class CartProduct(models.Model):
    """This model is describe products which contain in cart"""
    user = models.ForeignKey('Customer', verbose_name="Покупатель", on_delete=models.CASCADE)
    cart = models.ForeignKey('Cart', verbose_name="Корзина", on_delete=models.CASCADE, related_name="related_products")
    product = models.ForeignKey(Product, verbose_name="Продукт", on_delete=models.CASCADE)
    qty = models.PositiveIntegerField("Количество", default=1)
    total_price = models.DecimalField(max_digits=10,decimal_places=2, verbose_name="Сумма заказа")

    class Meta:
        ordering = ['cart','id']
        verbose_name = "Продукты корзины"
        

    def __str__(self) -> str:
        return (f"Продукт {self.product.name} корзины: {self.cart}")



class Cart(models.Model):
    """This model is describe cart of customer"""
    owner = models.ForeignKey('Customer', verbose_name='Владелец', on_delete= models.CASCADE)
    products = models.ManyToManyField(CartProduct, blank=True, related_name="related_carts")
    total_products = models.PositiveIntegerField(default=0)
    final_price = models.DecimalField(max_digits=10,decimal_places=2, verbose_name="Сумма заказа")
    
    class Meta:
        ordering = ['id']
        verbose_name = "Корзина"

    def __str__(self) -> str:
        return (f"Корзина пользователя {self.owner}")


class Customer(models.Model):
    """This models is describe customer"""
    user = ForeignKey(User, verbose_name="Пользователь", on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, verbose_name="Номер телефона", blank=True)

    class Meta:
        ordering = ['user']
        verbose_name = "Покупатель"

    def __str__(self) -> str:
        return (f"{self.user.first_name}")


class Specification(models.Model):
    """This model is describe all specifications of products""" 
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    name = models.CharField("Имя товара для характеристик", max_length=150)

    class Meta:
        ordering = ['object_id']
        verbose_name = "Характеристики"

    def __str__(self) -> str:
        return (f"Характеристики для товара {self.object_id}")
