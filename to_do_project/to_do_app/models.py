from django.db import models

# Create your models here.

task_status_choice=[
    ('N', 'Completed'),
    ('NC', 'Not Completed'),
]
class to_do_note(models.Model):
    msg_body=models.CharField(max_length=250, null=False)
    status_task=models.CharField(max_length=20, choices=task_status_choice,null=False, default="NC")
