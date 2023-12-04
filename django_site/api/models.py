from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Currency(models.Model):
    currency = models.CharField()

class Item(models.Model):
    name = models.CharField()
    description = models.TextField()
    price = models.FloatField()
    currency = models.ForeignKey(Currency, null=True, on_delete=models.SET_NULL)

class Discount(models.Model):
    name = models.CharField()
    duration = models.CharField(default="once")
    percent_off = models.PositiveIntegerField(default=10, validators=[MinValueValidator(1), MaxValueValidator(100)])

class Tax(models.Model):
    display_name = models.CharField()
    inclusive = models.BooleanField(default=False)
    percentage = models.PositiveIntegerField(default=10, validators=[MinValueValidator(1), MaxValueValidator(100)])

class Order(models.Model):
    items = models.ManyToManyField(Item)
    discount = models.ForeignKey(Discount, null=True, on_delete=models.SET_NULL)
    tax = models.ForeignKey(Tax, null=True, on_delete=models.SET_NULL)

