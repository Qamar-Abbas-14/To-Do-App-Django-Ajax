# Generated by Django 3.1.3 on 2020-11-16 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='to_do_note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('msg_body', models.CharField(max_length=250)),
            ],
        ),
    ]
