# Generated by Django 3.1.3 on 2020-11-30 16:06

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
                ('status_task', models.CharField(choices=[('N', 'Completed'), ('NC', 'Not Completed')], default='NC', max_length=20)),
            ],
        ),
    ]
