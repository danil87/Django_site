import stripe
from django.shortcuts import render
from .models import Item, Order
from django.http import JsonResponse
from rest_framework.views import APIView
from .serializers import ItemSerializer, OrderSerializer
from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY


class ItemAPI(APIView):
    serializer_item = ItemSerializer

    def get(self, request, id=None):
        if not None:
            item = Item.objects.get(id=id)
            item = self.serializer_item(item) 
            return JsonResponse(item.data)

class OrderAPI(APIView):
    serializer_order = OrderSerializer

    def get(self, request, id):
        order = Order.objects.get(id=id)
        order = self.serializer_order(order)
        return JsonResponse(order.data)
    
class StripeAPI(APIView):
    def get(self, request, id):
        item = Item.objects.get(id=id)
        currency = item.currency
        print(item.price)
        session = stripe.checkout.Session.create(
                payment_method_types=["card"],
                line_items=[
                    {
                        "price_data": {
                            "currency": currency.currency,
                            "unit_amount_decimal": 100 * item.price,
                            "product_data": {
                                "name": item.name,
                                "description": item.description
                            },
                        },
                        "quantity": 1,
                    },
                ],
                mode="payment",
                success_url=f'http://localhost:8000/item/{id}',
                cancel_url=f'http://localhost:8000/item/{id}')
        return JsonResponse({'session_id': session.id,
                            'key': settings.STRIPE_PUBLISH_KEY})
    
class StripeOrderAPI(APIView):
    def get(self, request, id):
        order = Order.objects.get(id=id)
        items = order.items.all()
        tax = order.tax
        discount = order.discount

        session = {
            'payment_method_types': ['card'],
            'mode': 'payment',
            'success_url': f'http://localhost:8000/order/{id}',
            'cancel_url': f'http://localhost:8000/order/{id}'
        }

        tax_rate = None if tax is None else stripe.TaxRate.create(
            display_name=tax.display_name,
            inclusive=tax.inclusive,
            percentage=tax.percentage
        )

        line_items = []
        for item in items:
            line_items.append({
                "price_data": {
                    "currency": "usd",
                    "unit_amount_decimal": 100 * item.price,
                    "product_data": {
                        "name": item.name,
                        "description": item.description,
                    },
                },
                "quantity": 1
            })

            if not tax_rate is None:
                line_items[-1]['tax_rates'] = [tax_rate.id]

        session['line_items'] = line_items
        if not discount is None:
            coupon = stripe.Coupon.create(
                name=discount.name,
                duration=discount.duration,
                percent_off=discount.percent_off
            )
            session['discounts'] = [{ 'coupon': coupon.id }]

        session = stripe.checkout.Session.create(**session)
        return JsonResponse({'session_id': session.id,
                            'key': settings.STRIPE_PUBLISH_KEY})