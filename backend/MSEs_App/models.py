from django.db import models

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
        
    (" Dagoretti South",  " Dagoretti South"),
     (" Dagoretti North",  " Dagoretti North"),
  ( " Embakasi East", " Embakasi East"),
   ( " Embakasi Central", " Embakasi Central"),
   (" Embakasi North", " Embakasi North"),
   ( "Embakasi West", "Embakasi West"),
    ( "Embakasi South", "Embakasi South"),
   (" Kamukunji", " Kamukunji"),
  ( " Kasarani", " Kasarani"),
   (" Kibra", " Kibra"),
  ( " Langata", " Langata"),
   ( "Makadara","Makadara"),
  ("  Mathare","  Mathare"),
   (" Starehe", " Starehe"),
   (" Westlands"," Westlands"),
  ( "Roysambu"," Roysambu"),
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
    ACTIVITY_CHOICES = [
        ('Car Wash', 'Car Wash'),
        ('Metal works/ Furniture', 'Metal works/ Furniture'),
        ('Fish mongering', 'Fish mongering'),
        ('Health Care', 'Health Care'),
        ('Waste recyclers/ CBOs', 'Waste recyclers/ CBOs'),
        ('Tailoring/ Basket Making', 'Tailoring/ Basket Making'),
        ('Hawking', 'Hawking'),
        ('Juice making', 'Juice making'),
        ('Salon/ nail salon', 'Salon/ nail salon'),
        ('Chicken farming', 'Chicken farming'),
        ('Mechanics', 'Mechanics'),
        ('Shoe shiners', 'Shoe shiners'),
        ('Catering', 'Catering'),
        ('Boda Boda', 'Boda Boda'),
        ('Leather Shoe makers', 'Leather Shoe makers'),
        ('Cleaning services', 'Cleaning services'),
        ('Arts and Entertainment', 'Arts and Entertainment'),
        ('Day care', 'Day care'),
        ('Masonry', 'Masonry'),
        ('Jua Kali', 'Jua Kali'),
        ('General Merchandise', 'General Merchandise'),
        ('Other', 'Other')
    ]
    fullName = models.CharField(max_length=255)
    identificationNumber = models.IntegerField(null=True)
    gender=models.CharField(max_length=25,choices=Gender)
    other_gender = models.CharField(max_length=25,blank=True)
    diasabilityStatus=models.CharField(max_length=25,choices=STATUS)
    email = models.EmailField(unique=True)
    phoneNumber= models.CharField(max_length=20)
    passportPhoto=models.FileField(upload_to='passport/')
    nationalIDPhoto=models.FileField(upload_to="nationalid/")
    businessName=models.CharField(max_length=30)
    isbusinessRegistered=models.BooleanField(default=True)
    registrationCertificate=models.FileField(upload_to='certificates/', blank=True, null=True)
    explainWhy=models.TextField(blank=True)
    subcounty=models.CharField(max_length=20,choices=Subcounties,null=True)
    ward = models.CharField(max_length=20)
    building=models.CharField(max_length=20)
    street=models.CharField(max_length=20)
    landmark=models.CharField(max_length=20)
    businessSector=models.CharField(max_length=25,choices=SectorofBusiness,null=True)
    natureofBusiness=models.TextField(max_length=50)
    numbofEmployees=models.IntegerField()
    lengthofOPerations=models.IntegerField()
    challenges=models.TextField(max_length=100,choices=BusinessChallenges,null=True)
    otherChallenges=models.TextField(max_length=100,null=True)
    awareofProgram=models.BooleanField()
    sourceofCapital=models.CharField(max_length=30,choices=SourceofCapital,null=True)
    capitalisAdequate=models.BooleanField()
    marketingProducts=models.CharField(max_length=20,choices=MarketProducts,null=True)
    targetMarket=models.CharField(max_length=25,choices=TargetMarket,null=True)
    participatedintradefair=models.BooleanField()
    tradefairParticipation=models.CharField(max_length=25,choices=TradefairParticipation,null=True)
    capacityBuildingTraining=models.BooleanField()
    capacityTrainingParticipation=models.CharField(max_length=25,choices=CapacityBuildingTraining ,null=True)
    isChamaRegistered=models.BooleanField()
    groupName=models.CharField(max_length=20)
    year_registered=models.DateTimeField()
    chairpersonsContact=models.CharField(max_length=20)
    numberofGroupmemb=models.IntegerField()
    listOfGroupmembers=models.FileField(upload_to='groupmembers/', blank=True, null=True)
    groupConsitution=models.FileField(upload_to='groupconstitution/', blank=True, null=True)
    groupRegCert=models.FileField(upload_to='groupCertificate/', blank=True, null=True)
    groupActivities=models.CharField(max_length=25,choices=ACTIVITY_CHOICES,null=True)
    othergroupActivites=models.TextField(max_length=100,null=True)
    expectations=models.CharField(max_length=50,choices=Expectations,null=True)
    otherExpectations=models.TextField(max_length = 100,null=True)
    comments=models.TextField(max_length=50)
    


    
    
    
  
    
    
    def __str__(self):
        return self.email