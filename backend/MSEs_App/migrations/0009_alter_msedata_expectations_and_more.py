# Generated by Django 5.0.4 on 2024-04-09 11:44

import multiselectfield.db.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("MSEs_App", "0008_alter_msedata_registrationcertificate"),
    ]

    operations = [
        migrations.AlterField(
            model_name="msedata",
            name="expectations",
            field=models.CharField(
                choices=[
                    ("Increased working capital", "Increase working capital"),
                    ("Access to more customers", "Access to more customers"),
                    (
                        "Enhanced business/ entrepreneurial skills",
                        "Enhanced business/  entrepreneurial skills",
                    ),
                    (" Increased business income ", "Increased business income"),
                    (" More employment opportunities", "More employment opportunities"),
                    (" Better livelihood", "Better livelihood"),
                    ("Other", "Other"),
                ],
                null=True,
            ),
        ),
        migrations.AlterField(
            model_name="msedata",
            name="groupActivities",
            field=multiselectfield.db.fields.MultiSelectField(
                choices=[
                    ("Car Wash", "Car Wash"),
                    ("Metal works/ Furniture", "Metal works/ Furniture"),
                    ("Fish mongering", "Fish mongering"),
                    ("Health Care", "Health Care"),
                    ("Waste recyclers/ CBOs", "Waste recyclers/ CBOs"),
                    ("Tailoring/ Basket Making", "Tailoring/ Basket Making"),
                    ("Hawking", "Hawking"),
                    ("Juice making", "Juice making"),
                    ("Salon/ nail salon", "Salon/ nail salon"),
                    ("Chicken farming", "Chicken farming"),
                    ("Mechanics", "Mechanics"),
                    ("Shoe shiners", "Shoe shiners"),
                    ("Catering", "Catering"),
                    ("Boda Boda", "Boda Boda"),
                    ("Leather Shoe makers", "Leather Shoe makers"),
                    ("Cleaning services", "Cleaning services"),
                    ("Arts and Entertainment", "Arts and Entertainment"),
                    ("Day care", "Day care"),
                    ("Masonry", "Masonry"),
                    ("Jua Kali", "Jua Kali"),
                    ("General Merchandise", "General Merchandise"),
                    ("Other", "Other"),
                ],
                max_length=25,
                null=True,
            ),
        ),
    ]
