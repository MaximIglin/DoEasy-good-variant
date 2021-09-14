from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.db.models.signals import post_save
from django.dispatch import receiver

from categories.models import Category
from user.models import CustomUser


User = get_user_model()

class Manufacturer_country(models.Model):
    """This model is describe all couttries which you can choice at registration product"""
    name = models.CharField("Страна", max_length=100)

    class Meta:
        ordering = ['name']
        verbose_name = "Страна производитель"
    def __str__(self):
        return self.name


class Product(models.Model):
    """This model is describe all products"""
    category = models.ForeignKey(Category, verbose_name="Категория", on_delete=models.CASCADE, null=True)
    name = models.CharField("Название товара", max_length=50)
    slug = models.SlugField("Слаг",unique=True, max_length=200, default='')
    brand = models.ForeignKey('Brand',verbose_name="Бренд", on_delete=models.CASCADE)
    image_link = models.CharField("Ссылка на изображение", max_length=300)
    description = models.TextField("Описание товара")
    price = models.DecimalField(max_digits=10,decimal_places=2, verbose_name="Цена")
    manufecture_country = models.ForeignKey('Manufacturer_country', verbose_name="Страна производитель", on_delete=models.CASCADE, default='')
    stock = models.PositiveIntegerField("Остаток товара")
    relise_year = models.PositiveIntegerField('Год релиза', default=2021)
    color = models.CharField('Цвет', max_length=40, default='')
    available = models.BooleanField(default=True)
    created = models.DateField(auto_now=True)
    
    class Meta:
        abstract = True
        ordering = ['available','id', 'name']   

    def __str__(self) -> str:
        return self.name    


class Brand(models.Model):
    """This model is describe all product's brands"""
    name = models.CharField("Бренд", max_length=100)
    slug = models.SlugField("Слаг", max_length=30, unique=True, default='')

    class Meta:
        ordering = ['name']
        verbose_name = "Бренды"

    def __str__(self):
        return self.name   


class CartProduct(models.Model):
    """This model is describe products which contain in cart"""
    user = models.ForeignKey('Customer', verbose_name="Покупатель", on_delete=models.CASCADE)
    cart = models.ForeignKey('Cart', verbose_name="Корзина", on_delete=models.CASCADE, related_name="related_products")
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    qty = models.PositiveIntegerField("Количество", default=1)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Сумма заказа", null=True)

    class Meta:
        ordering = ['cart','id']
        verbose_name = "Продукты корзины"
        

    def __str__(self) -> str:
        return (f"Продукт {self.content_object.name} корзины: {self.cart}")


class Customer(models.Model):
    """This models is describe customer"""
    user = models.OneToOneField(User, verbose_name="Пользователь", on_delete=models.CASCADE, primary_key=True)
    phone = models.CharField(max_length=20, verbose_name="Номер телефона", blank=True, null = True)

    class Meta:
        ordering = ['user']
        verbose_name = "Покупатель"

    def __str__(self) -> str:
        return (f"Покупатель {self.user.email}")


@receiver(post_save, sender = CustomUser) 
def update_customer_signal(sender, instance, created, ** kwargs): 
    if created:      
        new_customer = Customer.objects.create(user = instance) 
        new_customer.save()


class Cart(models.Model):
    """This model is describe cart of customer"""
    owner = models.ForeignKey('Customer', verbose_name='Владелец', on_delete= models.CASCADE)
    products = models.ManyToManyField(CartProduct, blank=True, related_name="related_carts")
    total_products = models.PositiveIntegerField(default=0)
    final_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Сумма заказа",default=0) #метка для завершённой корзины
    in_order = models.BooleanField(default=False) #корзина заглушка для неатунтифицированных пользователей
    
    class Meta:
        ordering = ['id']
        verbose_name = "Корзина"

    def __str__(self) -> str:
        return (f"Корзина пользователя {self.owner}")

@receiver(post_save, sender = Customer) 
def update_cart_signal(sender, instance, created, ** kwargs): 
    if created:      
        new_cart = Cart.objects.create(owner = instance) 
        new_cart.save() 


class Smartphones(Product):
    """This model is describe all smartphone-products"""
    display_diagnal = models.CharField("Диагональ экрана", max_length=10, default='')
    screen_resolution = models.CharField('Разрешение экрана', max_length=10, default=" x ")
    display_technology = models.CharField('Тип дисплея', max_length=20, default='')
    cpu = models.CharField("Процессор", max_length=250, null=True)
    number_of_processor_cores = models.PositiveIntegerField('Количество ядер процессора', null=True)
    main_camera_mpix = models.CharField("Основная камера", max_length=10, null=True)
    number_of_main_cameras = models.PositiveIntegerField('Количество основыных камер', null=True)
    video_resolution = models.CharField("Максимальное разрешение видео-съемки",max_length=20, null=True)
    front_camera_mpix = models.CharField("Фронтальная камера", max_length=10,null=True)
    ram = models.PositiveIntegerField("Оперативная память (GB)", null=True)
    rom = models.PositiveIntegerField("Встроенной памяти (GB)", null=True)
    battery_capacity = models.CharField("Ёмкость аккумулятора",max_length=20, null = True)
    
    class Meta:
        verbose_name = "Смартфоны"


class Laptops(Product):
    """This model is describe all laptops-products"""
    display_diagnal = models.CharField("Диагональ экрана", max_length=10, default='')
    screen_resolution = models.CharField('Разрешение экрана', max_length=10, default=" x ")
    display_technology = models.CharField('Тип дисплея', max_length=20, default='')
    cpu = models.CharField("Процессор", max_length=250, null=True)
    number_of_processor_cores = models.PositiveIntegerField('Количество ядер процессора', null=True)
    main_camera_mpix = models.CharField("Основная камера", max_length=10, null=True)
    ram = models.PositiveIntegerField("Оперативная память (GB)", null=True)
    rom = models.PositiveIntegerField("Встроенной памяти (GB)", null=True)
    battery_capacity = models.CharField("Ёмкость аккумулятора",max_length=20 , null = True)

    class Meta:
        verbose_name = "Ноутбуки"
    

