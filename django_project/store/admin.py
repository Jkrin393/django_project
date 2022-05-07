from multiprocessing import get_start_method
from django.contrib import admin
from .models import Game, Customer, Order

# Register your models here.

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ['title', 'genre', 'release_date', 'game_id']

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email']

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = [ 'customer', 'get_games', 'order_id']