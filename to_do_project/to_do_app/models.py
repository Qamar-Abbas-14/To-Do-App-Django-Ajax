from django.db import models

# Create your models here.
class to_do_note(models.Model):
    msg_body=models.CharField(max_length=250, null=False)
