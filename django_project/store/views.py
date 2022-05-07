from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
# Create your views here.

from .models import Game, Customer, Order
from .serializers import GameSerializer, CustomerSerializer, OrderSerializer


class GameView(APIView):
    def get(self, request: Request):
        games = Game.objects.all()
        serialized_game = GameSerializer(games, many = True)
        return Response(serialized_game.data)


class GameDetailView(APIView):
    def get(self, request: Request, id):
        
        games = Game.objects.get(game_id=id)
        serialized_game = GameSerializer(games)
        return Response(serialized_game.data)


class CustomerView(APIView):
    def get(self, request: Request):
        customers = Customer.objects.all()
        serialized_customers = CustomerSerializer(customers, many = True)
        return Response(serialized_customers.data)


class CustomerIDView(APIView):
    def get(self, request: Request, email):
        customers = Customer.objects.get(email = email)
        serialized_customers = CustomerSerializer(customers)
        return Response(serialized_customers.data)


class CustomerIDOrdersView(APIView):
    def get(self, request: Request, email):
        orders = Order.objects.filter(customer=email)
        serialized_orders = OrderSerializer(orders, many=True)
        return Response(serialized_orders.data)


class CustomerIDOrdersIDView(APIView):
    def get(self, request: Request, email, id):
        orders = Order.objects.filter(customer=email)
        order = orders.get(order_id=id)
        serialized_order = OrderSerializer(order)
        return Response(serialized_order.data)


class OrderView(APIView):
    def get(self, request: Request):
        orders = Order.objects.all()
        serialized_customers = OrderSerializer(orders, many = True)
        return Response(serialized_customers.data)


class OrderIDView(APIView):
    def get(self, request: Request, id):
        
        orders = Order.objects.get(order_id=id)
        serialized_order = OrderSerializer(orders)
        return Response(serialized_order.data)

class OrderByCustomerView(APIView):
    def get(self, request: Request, email):
        orders = Order.objects.filter(customer=email)
        serialized_orders = OrderSerializer(orders, many=True)
        return Response(serialized_orders.data)

   
 


