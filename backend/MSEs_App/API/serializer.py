from rest_framework import serializers
from ..models import MSEData

class MSEDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = MSEData
        fields = '__all__'