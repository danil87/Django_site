from django.contrib import admin
from .models import Item, Order, Discount, Tax, Currency

admin.site.register([
    Item,
    Order,
    Discount,
    Tax,
    Currency
])