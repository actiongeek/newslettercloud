# Generated by Django 2.1.7 on 2019-04-03 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_address_organization'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organization',
            name='name',
            field=models.CharField(blank=True, max_length=100, verbose_name='name'),
        ),
    ]
