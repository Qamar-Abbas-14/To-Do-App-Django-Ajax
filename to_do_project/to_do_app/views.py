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
        pdb.set_trace()

        if msg_exist:
            print("This Task Already Exist ...")
            pdb.set_trace()
            pass
        else:
            obj=to_do_note()
            obj.msg_body = coming_data
            obj.save()
            print(obj)
            pdb.set_trace()
        
        

        # tbl_id=to_do_note.objects.get(msg_body=coming_data)
        # print(tbl_id)
        # msg_id = tbl_id.id
        # pdb.set_trace()

        return JsonResponse({'data':msg_id})

    return render(request, 'index.html')

# Create your views here.
