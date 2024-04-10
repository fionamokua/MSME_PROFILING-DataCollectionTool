from django.db import models
from multiselectfield import MultiSelectField
from django.contrib.postgres.fields import JSONField
import json
import datetime
from django.core.validators import RegexValidator, MaxValueValidator, MinValueValidator
# Create your models here.
class MSEData(models.Model):
    
    STATUS = [
        ('Yes', 'Yes'),
        ('No', 'No')
    ]
    
    
    Group_operation_choices = [
        ('0-1', '0-1 years'),
        ('1-5', '1-5 years'),
        ('5+', 'More than 5 years'),
    ]
    Gender = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]
    Subcounties=[
        
    ("Dagoretti South",  "Dagoretti South"),
     ("Dagoretti North",  "Dagoretti North"),
  ( "Embakasi East", "Embakasi East"),
   ( "Embakasi Central", "Embakasi Central"),
   ("Embakasi North", "Embakasi North"),
   ( "Embakasi West", "Embakasi West"),
    ( "Embakasi South", "Embakasi South"),
   ("Kamukunji", "Kamukunji"),
  ( "Kasarani", "Kasarani"),
   ("Kibra", "Kibra"),
  ( "Langata", "Langata"),
   ( "Makadara","Makadara"),
  ("Mathare","Mathare"),
   ("Starehe", "Starehe"),
   ("Westlands","Westlands"),
  ( "Roysambu","Roysambu"),
   ("Ruaraka","Ruaraka"),
    ]
    SectorofBusiness=[
        ("Retail","Retail"),
        ("Wholesale","Wholesale"),
        ("Service","Service"),
        ("Juakali/cottage","Juakali/cottage")
    
    ]
    NumberofEmployees = [
        ("1-10","1-10"),
        ("11-50 ","11-50")
                         ]
    LengthOfBusinessOperations = [
        ("0-6 months","0-6 months"),
        ("6-12 months","6-12 months"),
        ("1-2 years","1-2 years"),
        ("2-3 years","2-3 years"),
        ("3 Years and above","3 years and above"),
        
    ]
    BusinessChallenges=[
        ("Inadequate access to affordable capital", "Inadequate access to affordable capital"),
        ("Limited market access", "Limited market access"),
         ("Inadequate business/entrepreneur skills", "Inadequate business/entrepreur skills"),
         ("Other", "Other")        
    ]
    SourceofCapital=[
        ("Own Savings", "Own Savings"),
        ("Family/Friend support", "Family/Friend support"),
        ("Chama", "Chama"),
        ("Loan", "Loan"),
    ]
    MarketProducts=[
        ("Virtual","Virtual"),
        ("Physical","Physical"),
        ("Both","Both"),
    ]
    TargetMarket=[
        ("Local","Local"),
        ("International","International"),
    ]
    TradefairParticipation=[
        ("Self-sponsored","Self-sponsored"),
        ("Sponsored","Sponsored"),
    ]
    CapacityBuildingTraining=[
        ("Self-sponsored","Self-sponsored"),
        ("Sponsored","Sponsored")
    ]
    Expectations=[
        ("Increased working capital","Increase working capital"),
        ("Access to more customers","Access to more customers"),
        ("Enhanced business/ entrepreneurial skills","Enhanced business/  entrepreneurial skills"),
        (" Increased business income ","Increased business income"),
        (" More employment opportunities","More employment opportunities"),
        (" Better livelihood","Better livelihood"),
        ("Other","Other")
    ]
    phone_number_validator = RegexValidator(
        regex=r'^0\d{9}$',  # Regular expression: starts with 0, followed by 9 digits
        message='Phone number must start with 0 and have a total of 10 digits.'
    )
    
    fullName = models.CharField(max_length=255)
    identificationNumber = models.IntegerField(null=True)
    gender=models.CharField(max_length=25,choices=Gender)
    other_gender = models.CharField(max_length=25,blank=True)
    disabilityStatus=models.CharField(max_length=25,choices=STATUS)
    email = models.EmailField(unique=True)
    phoneNumber= models.CharField(max_length=20,validators=[phone_number_validator])
    passportPhoto=models.FileField(upload_to='media/passport/')
    nationalIDPhoto=models.FileField(upload_to="media/nationalid/")
    businessName=models.CharField(max_length=30)
    isbusinessRegistered=models.CharField(max_length=20,choices=STATUS)
    registrationCertificate=models.FileField(upload_to='media/businesscertificates/', blank=True, null=True)
    explainWhy=models.TextField(blank=True)
    subcounty=models.CharField(max_length=20,choices=Subcounties,null=True)
    ward = models.CharField(max_length=20)
    building=models.CharField(max_length=20)
    street=models.CharField(max_length=20)
    landmark=models.CharField(max_length=20)
    businessSector=models.CharField(max_length=25,choices=SectorofBusiness,null=True)
    natureofBusiness=models.TextField(max_length=50)
    numbofEmployees=models.IntegerField()
    lengthofOperations=models.CharField(max_length=40,choices=LengthOfBusinessOperations)
    challenges=models.TextField(max_length=100,choices=BusinessChallenges,null=True)
    otherChallenges=models.TextField(max_length=100,null=True,blank=True)
    awareofProgram=models.CharField(max_length=100,choices=STATUS,null=True)
    sourceofCapital=models.CharField(max_length=30,choices=SourceofCapital,null=True)
    capitalisAdequate=models.CharField(max_length=25,choices=STATUS)
    marketingProducts=models.CharField(max_length=20,choices=MarketProducts,null=True)
    targetMarket=models.CharField(max_length=25,choices=TargetMarket,null=True)
    participatedintradefair=models.CharField(max_length=25,choices=STATUS)
    tradefairParticipation=models.CharField(max_length=25,choices=TradefairParticipation,null=True)
    capacityBuildingTraining=models.CharField(max_length=25,choices=STATUS)
    capacityTrainingParticipation=models.CharField(max_length=25,choices=CapacityBuildingTraining ,null=True)
    isGroupRegistered=models.CharField(max_length=25,choices=STATUS,null=True)
    groupName=models.CharField(max_length=20)
    year_registered=models.IntegerField(blank=True,null=True,validators=[MinValueValidator(2000), MaxValueValidator(datetime.date.today().year)])
    chairpersonsContact=models.CharField(max_length=20)
    numberofGroupmemb=models.IntegerField()
    listOfGroupmembers=models.FileField(upload_to='media/groupmembers/', blank=True, null=True)
    groupConsitution=models.FileField(upload_to='media/groupconstitution/', blank=True, null=True)
    groupRegCert=models.FileField(upload_to='media/groupCertificate/', blank=True, null=True)
    groupActivities = models.JSONField(default=list,blank=True)
    othergroupActivites=models.TextField(max_length=100,null=True,blank=True)
    expectations=models.CharField(max_length=50,choices=Expectations,null=True)
    otherExpectations=models.TextField(max_length = 100,null=True,blank=True)
    comments=models.TextField(max_length=50)
    

    
    
    
    
  
    
    
    def __str__(self):
        return self.email