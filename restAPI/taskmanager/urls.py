from django.conf.urls import url 
from .views import task_list, task_detail, task_list_published
 
urlpatterns = [ 
    url(r'^api/tasks$', task_list),
    url(r'^api/tasks/(?P<pk>[0-9]+)$', task_detail),
    url(r'^api/tasks/published$', task_list_published)
]