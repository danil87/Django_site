from django.urls import path
from .views import StripeAPI, ItemAPI, OrderAPI, StripeOrderAPI

urlpatterns = [
    path('buy/<int:id>', StripeAPI.as_view()),
    path('item/<int:id>', ItemAPI.as_view()),
    path('order/<int:id>', OrderAPI.as_view()),
    path('buy/order/<int:id>', StripeOrderAPI.as_view())
]