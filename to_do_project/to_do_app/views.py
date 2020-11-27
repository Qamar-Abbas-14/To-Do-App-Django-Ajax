from django.shortcuts import render
from django.http import JsonResponse
from .models import to_do_note
import pdb

def mainpage(request):
    print(request)

    if request.GET.get('content'):
        coming_data= request.GET.get('content')
        msg_exist=to_do_note.objects.filter(msg_body=coming_data)
        print(msg_exist)
        

        if msg_exist:
            print("This Task Already Exist ...")
            msg_id='Task Already Exists'
            pass
        else:
            obj=to_do_note()
            obj.msg_body = coming_data
            obj.save()
            msg_id=obj.id
            print(obj)
        

        return JsonResponse({'data':msg_id})

    return render(request, 'index.html')

# Create your views here.
