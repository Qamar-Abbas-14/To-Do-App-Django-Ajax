from django.urls import path
from to_do_app import views

urlpatterns=[
    path('', views.mainpage, name='mainpage'),
    path('tasks/', views.mainpage, name='mainpage'),
]