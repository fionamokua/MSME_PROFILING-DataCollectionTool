from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.decorators import action
from rest_framework.response import Response
from ..models import MSEData
from .serializer import MSEDataSerializer
# Create your views here.
class MSEsProfilingViewSet(viewsets.ViewSet):
    # @action(detail=False,methods=['GET'])
    def list(self, request):
        if request.method == 'GET':
            queryset = MSEData.objects.all()
            serializer = MSEDataSerializer(queryset, many=True)
            return Response(serializer.data)

    @action(detail=False,methods=['POST'])
    def create(self, request):
        if request.method == 'POST':
            
           
            payload=request.data
            serializer = MSEDataSerializer(data=request.data)
        
            if serializer.is_valid():
                
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MSEProfilingDetailViewSet(viewsets.ViewSet):
    @action(detail=True,methods=['GET'])
    def retrieve(self, request, pk=None):
        
        try:
            stakeholder = MSEData.objects.get(pk=pk)
        except MSEData.DoesNotExist:
            return Response({"message": "stakeholder details not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = MSEDataSerializer(stakeholder)
        return Response(serializer.data)
    @action(detail=True,methods=['PUT'])
    def update(self, request, pk=None):
        try:
            MSE = MSEData.objects.get(pk=pk)
        except MSEData.DoesNotExist:
            return Response({"message": "Stakeholder details not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = MSEDataSerializer(MSE, data=request.data)
        if serializer.is_valid():
            serializer.save()
            

            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
    @action(detail=True,methods=['DELETE'])
       
    def destroy(self, request, pk=None):
        try:
            stakeholder = MSEData.objects.get(pk=pk)
        except MSEData.DoesNotExist:
            return Response({"message": "stakeholder details not foud"}, status=status.HTTP_404_NOT_FOUND)
        
      
        stakeholder.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)