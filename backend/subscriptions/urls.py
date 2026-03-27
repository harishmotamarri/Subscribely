from django.urls import path
from .views import get_plans, subscribe, dashboard

urlpatterns = [
    path('plans/', get_plans),
    path('subscribe/', subscribe),
    path('dashboard/<int:user_id>/', dashboard),
]