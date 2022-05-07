from rest_framework import serializers
from .models import Game, Customer, Order


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['game_id','title', 'genre', 'release_date']

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['first_name', 'last_name', 'email']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [ 'customer', 'game','order_id', 'purchase_month']

