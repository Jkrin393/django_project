from django.urls import path, include
from . import views

urlpatterns = [
    path('games/', views.GameView.as_view(), name ='store-games'),
    path('games/<int:id>/', views.GameDetailView.as_view(), name = 'store-game-id'),
   

    path('customers/', views.CustomerView.as_view(), name ='store-customers'),
    path('customers/<str:email>/', views.CustomerIDView.as_view(), name = 'store-customer-id'),
    path('customers/<str:email>/orders/', views.CustomerIDOrdersView.as_view(), name = 'store-customer-id-orders'),
    path('customers/<str:email>/orders/<int:id>/', views.CustomerIDOrdersIDView.as_view(), name = 'store-customer-id-orders'),

    path('orders/', views.OrderView.as_view(), name ='store-order'),
    path('orders/<int:id>/', views.OrderIDView.as_view(), name = 'store-order-id'),
    path('orders/<str:email>/', views.OrderByCustomerView.as_view(), name = 'store-order-customer'),
    
    

    
]


