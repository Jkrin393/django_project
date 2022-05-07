
from django.db import models





class Game(models.Model):
    game_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100) 
    genre = models.CharField(max_length=100) 
    release_date = models.IntegerField(blank=True, null=True)
    
    def __str__(self):
        return self.title

class Customer(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(primary_key=True)
    def __str__(self):
        return self.email


class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    game = models.ManyToManyField(Game, related_name='orders')
    purchase_month = models.CharField(max_length=12, blank=True, null=True)
        
    def __str__(self):
        return str(self.order_id)

    def get_games(self, ):
        return "\n, ".join([o.title for o in self.game.all()])







