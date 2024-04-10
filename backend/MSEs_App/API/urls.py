from django.urls import path
from .views import MSEsProfilingViewSet,MSEProfilingDetailViewSet

urlpatterns = [
    path("", MSEsProfilingViewSet.as_view({'get': 'list', 'post': 'create'}), name="formview"),
       path("<int:pk>/", MSEProfilingDetailViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="external-stakeholder-detail"),
]