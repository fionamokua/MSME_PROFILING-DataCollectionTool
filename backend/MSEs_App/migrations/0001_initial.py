# Generated by Django 5.0.4 on 2024-04-09 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="MSEData",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("fullName", models.CharField(max_length=255)),
                ("identificationNumber", models.IntegerField(null=True)),
                ("gender", models.CharField(max_length=255)),
                ("diasabilityStatus", models.BooleanField(default=False)),
                ("email", models.EmailField(max_length=254, unique=True)),
                ("phoneNumber", models.CharField(max_length=20)),
                ("passportPhoto", models.ImageField(upload_to="")),
                ("nationalIDPhoto", models.ImageField(upload_to="")),
                ("businessName", models.CharField(max_length=30)),
                ("businessRegistered", models.BooleanField(default=True)),
                ("registrationCertificate", models.ImageField(upload_to="")),
                ("explainWhy", models.TextField()),
                ("wubcounty", models.CharField(max_length=20)),
                ("building", models.CharField(max_length=20)),
                ("street", models.CharField(max_length=20)),
                ("landmark", models.CharField(max_length=20)),
                ("businessSector", models.CharField(max_length=20)),
                ("natureofBusiness", models.TextField(max_length=50)),
                ("numbofEmployees", models.IntegerField(max_length=10)),
                ("lengthofOPerations", models.IntegerField(max_length=10)),
                ("challenges", models.TextField(max_length=20)),
                ("awareofProgram", models.BooleanField()),
                ("sourceofCapital", models.BooleanField()),
                ("capitalisAdequate", models.BooleanField()),
                ("marketing", models.BooleanField()),
                ("targetMarket", models.BooleanField()),
                ("tradefairParticipation", models.BooleanField()),
                ("participated", models.BooleanField()),
                ("capacityBuildingTraining", models.BooleanField()),
                ("capacityTraining", models.BooleanField()),
                ("groupName", models.CharField(max_length=20)),
                ("year_registered", models.DateTimeField()),
                ("chairpersonsContact", models.CharField(max_length=20)),
                ("numberofGroupmemb", models.IntegerField()),
                ("listOfGroupmembers", models.ImageField(upload_to="")),
                ("groupConsitution", models.ImageField(upload_to="")),
                ("groupRegCert", models.ImageField(upload_to="")),
                ("groupActivities", models.CharField(max_length=20)),
                ("expectations", models.CharField(max_length=20)),
                ("comments", models.TextField(max_length=50)),
                ("subCounty", models.CharField(max_length=100)),
                ("diasability", models.BooleanField(default=False)),
                ("ward", models.CharField(max_length=100)),
                ("chama", models.BooleanField()),
                ("nameOfChama", models.CharField(blank=True, max_length=255)),
                ("membershipPosition", models.CharField(max_length=100)),
                ("isChamaRegistered", models.BooleanField()),
                (
                    "chamaOperation",
                    models.CharField(
                        choices=[
                            ("0-1", "0-1 years"),
                            ("1-5", "1-5 years"),
                            ("5+", "More than 5 years"),
                        ],
                        max_length=20,
                    ),
                ),
            ],
        ),
    ]