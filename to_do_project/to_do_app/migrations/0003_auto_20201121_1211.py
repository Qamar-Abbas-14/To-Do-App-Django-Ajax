# Generated by Django 3.1.3 on 2020-11-21 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('to_do_app', '0002_to_do_note_status_task'),
    ]

    operations = [
        migrations.AlterField(
            model_name='to_do_note',
            name='status_task',
            field=models.CharField(choices=[('N', 'Completed'), ('NC', 'Not Completed')], default='NC', max_length=20),
        ),
    ]
