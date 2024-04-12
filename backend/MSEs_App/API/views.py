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

    
    def create(self, request):
        if request.method == 'POST':
            # is_business_registered = self.request.data.get('isbusinessRegistered', None)
            # registration_certificate = self.request.data.get('registrationCertificate', None)
            # participatedintradefair=self.request.data.get('participatedintradefair', None)
            # tradefairParticipation=self.request.data.get('tradefairParticipation', None)
            # capacityBuildingTraining=self.request.data.get('capacityBuildingTraining', None)
            # capacityTrainingParticipation=self.request.data.get('capacityTraining', None)
            
            
            # explain = self.request.data.get('explainWhy', None)
            # gender = request.data.get('gender', None)
            # other_gender = request.data.get('other_gender', None)
            # if gender == 'Other' and not other_gender:
            #     return Response({"error": "If gender is specified as 'Other', you must provide details in the 'other_gender' field."},
            #                     status=status.HTTP_400_BAD_REQUEST)
            # if gender in ['male', 'female'] and other_gender:
            #     return Response({"error": "If gender is specified as 'Male' or 'Female', the 'other_gender' field should be empty."},
            #                 status=status.HTTP_400_BAD_REQUEST)
           
            # if is_business_registered == 'yes' and not registration_certificate:
            #     return Response({"error": "Registration certificate is required if business is registered."},
            #                 status=status.HTTP_400_BAD_REQUEST)
            # if is_business_registered == 'no':
            #     if registration_certificate: 
            #         return Response({"error": "Registration certificate is required for only those whose business is registered."},
            #                 status=status.HTTP_400_BAD_REQUEST)
            #     if not explain:
            #         return Response({"error": "If business is not registered, explain why is required."},
            #                     status=status.HTTP_400_BAD_REQUEST)
            # if  participatedintradefair == "yes" and not tradefairParticipation:
            #     return Response({"error": "kindly fill if tradefairParticipation is selfsponsored or sponsores"},
            #                 status=status.HTTP_400_BAD_REQUEST)
            # if capacityBuildingTraining == "yes" and not capacityTrainingParticipation:
            #     return Response({"error": "kindly fill if tradefairParticipation is selfsponsored or sponsores"},
            #                 status=status.HTTP_400_BAD_REQUEST)
                


           
           
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
            return Response({"message": "MSE details not found"}, status=status.HTTP_404_NOT_FOUND)
            
        serializer = MSEDataSerializer(stakeholder)
        return Response(serializer.data)
    @action(detail=True,methods=['PUT'])
    def update(self, request, pk=None):
        try:
            MSE = MSEData.objects.get(pk=pk)
        except MSEData.DoesNotExist:
            return Response({"message": "MSE details not found"}, status=status.HTTP_404_NOT_FOUND)
        # is_business_registered = self.request.data.get('isbusinessRegistered', None)
        # registration_certificate = self.request.data.get('registrationCertificate', None)
        # participatedintradefair=self.request.data.get('participatedintradefair', None)
        # tradefairParticipation=self.request.data.get('tradefairParticipation', None)
        # capacityBuildingTraining=self.request.data.get('capacityBuildingTraining', None)
        # capacityTrainingParticipation=self.request.data.get('capacityTraining', None)
            
            
        # explain = self.request.data.get('explainWhy', None)
        # gender = request.data.get('gender', None)
        # other_gender = request.data.get('other_gender', None)
        # if gender == 'Other' and not other_gender:
        #         return Response({"error": "If gender is specified as 'Other', you must provide details in the 'other_gender' field."},
        #                         status=status.HTTP_400_BAD_REQUEST)
        # if gender in ['male', 'female'] and other_gender:
        #         return Response({"error": "If gender is specified as 'Male' or 'Female', the 'other_gender' field should be empty."},
        #                     status=status.HTTP_400_BAD_REQUEST)
           
        # if is_business_registered == 'yes' and not registration_certificate:
        #         return Response({"error": "Registration certificate is required if business is registered."},
        #                     status=status.HTTP_400_BAD_REQUEST)
        # if is_business_registered == 'no':
        #         if registration_certificate: 
        #             return Response({"error": "Registration certificate is required for only those whose business is registered."},
        #                     status=status.HTTP_400_BAD_REQUEST)
        #         if not explain:
        #             return Response({"error": "If business is not registered, explain why is required."},
        #                         status=status.HTTP_400_BAD_REQUEST)
        # if  participatedintradefair == "yes" and not tradefairParticipation:
        #         return Response({"error": "kindly fill if tradefairParticipation is selfsponsored or sponsored"},
        #                     status=status.HTTP_400_BAD_REQUEST)
        # if capacityBuildingTraining == "yes" and not capacityTrainingParticipation:
        #         return Response({"error": "kindly fill if tradefairParticipation is selfsponsored or sponsored"},
        #                     status=status.HTTP_400_BAD_REQUEST)   
        
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
            return Response({"message": "MSE details not foud"}, status=status.HTTP_404_NOT_FOUND)
        
      
        stakeholder.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)