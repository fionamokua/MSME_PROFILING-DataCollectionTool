# Generated by Django 5.0.4 on 2024-04-10 17:33

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("MSEs_App", "0020_delete_activity"),
    ]

    operations = [
        migrations.AlterField(
            model_name="msedata",
            name="phoneNumber",
            field=models.CharField(
                max_length=20,
                validators=[
                    django.core.validators.RegexValidator(
                        message="Phone number must start with 0 and have a total of 10 digits.",
                        regex="^0\\d{9}$",
                    )
                ],
            ),
        ),
    ]
