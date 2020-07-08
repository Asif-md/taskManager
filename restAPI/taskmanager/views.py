# Create your views here.
from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status, permissions

 
from .models import TaskManager
from .serializers import TaskManagerSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def task_list(request):
    # GET list of tasks, POST a new tasks, DELETE all tasks
    if request.method == 'GET':
        tasks = TaskManager.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            tasks = tasks.filter(title__icontains=title)
        
        tasks_serializer = TaskManagerSerializer(tasks, many=True)
        return JsonResponse(tasks_serializer.data, safe=False)
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
        task_data = JSONParser().parse(request)
        task_serializer = TaskManagerSerializer(data=task_data)
        if task_serializer.is_valid():
            task_serializer.save()
            return JsonResponse(task_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def task_detail(request, pk):
    # find task by pk (id)
    try: 
        task = TaskManager.objects.get(pk=pk) 
    except TaskManager.DoesNotExist: 
        return JsonResponse({'message': 'The task does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE task
    if request.method == 'GET': 
        task_serializer = TaskManagerSerializer(task) 
        return JsonResponse(task_serializer.data)
    elif request.method == 'PUT': 
        task_data = JSONParser().parse(request) 
        task_serializer = TaskManagerSerializer(task, data=task_data) 
        if task_serializer.is_valid(): 
            task_serializer.save() 
            return JsonResponse(task_serializer.data) 
        return JsonResponse(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    elif request.method == 'DELETE': 
        task.delete() 
        return JsonResponse({'message': 'Task was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    elif request.method == "DELETE":
        count = TaskManager.objects.all().delete()
        return JsonResponse({'message': '{} Tasks were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
    
        
@api_view(['GET'])
def task_list_published(request):
    task = TaskManager.objects.filter(published=True)
        
    if request.method == 'GET':
        task_serializer = TaskManagerSerializer(task, many=True)
        return JsonResponse(task_serializer.data, safe=False)
