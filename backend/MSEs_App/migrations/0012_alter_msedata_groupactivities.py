# Generated by Django 5.0.4 on 2024-04-09 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("MSEs_App", "0011_activity_remove_msedata_groupactivities_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="msedata",
            name="groupActivities",
            field=models.ManyToManyField(blank=True, null=True, to="MSEs_App.activity"),
        ),
    ]