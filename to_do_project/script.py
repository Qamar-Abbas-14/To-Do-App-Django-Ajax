import os
import django
import schedule
import time
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'to_do_project.settings')
django.setup()

from to_do_app.models import to_do_note

# newnote=to_do_note(msg_body='Created_Qamar')
# newnote.save()
qry=to_do_note.objects.all()
print(qry)

i=0
def job():
    global i
    print("I'm working... %s"%i)
    i=i+1

schedule.every(1/60).minutes.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
