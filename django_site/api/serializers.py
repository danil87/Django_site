from rest_framework import serializers
from .models import Item, Order, Discount, Tax, Currency


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'name', 'description', 'price')

class DiscoutnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = '__all__'

class TaxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tax
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    items = ItemSerializer(read_only=True, many=True)

    class Meta:
        model = Order
        fields = ('id', 'items')

# class OrderDetailSerializer(serializers.ModelSerializer):
#     items = ItemSerializer(read_only=True, many=True)
#     discount = DiscoutnSerializer(read_only=True, many=True)
#     tax = TaxSerializer(read_only=True, many=True)

#     class Meta:
#         model = Order
#         fields = '__all__'