from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class TaskManager(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    published = models.BooleanField(default=False)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)