from django.db import models

class Plan(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    billing_cycle = models.CharField(max_length=20)
    features = models.TextField()

    def __str__(self):
        return self.name
    
from django.db import models
from users.models import User

class Plan(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    billing_cycle = models.CharField(max_length=20)
    features = models.TextField()

    def __str__(self):
        return self.name


class Subscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default="active")

    def __str__(self):
        return f"{self.user.email} - {self.plan.name}"