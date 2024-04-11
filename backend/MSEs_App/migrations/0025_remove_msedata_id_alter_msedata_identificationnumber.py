# Generated by Django 5.0.4 on 2024-04-11 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("MSEs_App", "0024_alter_msedata_year_registered"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="msedata",
            name="id",
        ),
        migrations.AlterField(
            model_name="msedata",
            name="identificationNumber",
            field=models.IntegerField(default=0, primary_key=True, serialize=False),
        ),
    ]
