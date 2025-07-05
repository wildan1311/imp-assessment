from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    
    # CRUD user
    path('', views.user_list, name='user_list'),
    path('edit/<int:pk>/', views.user_edit, name='user_edit'),
    path('delete/<int:pk>/', views.user_delete, name='user_delete'),
]