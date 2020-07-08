from .models import TaskManager
from rest_framework import viewsets, permissions
from .serializers import TaskManagerSerializer

# Lead Viewset


class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TaskManagerSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
