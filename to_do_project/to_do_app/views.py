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

    if request.GET.get('task_id'):
        del_data=request.GET.get('task_id')
        ####Logic to delete data based on id
        print("Delete the task # ", del_data)
        obj=to_do_note.objects.get(id=del_data)
        obj.delete()
        return JsonResponse({'data_del': del_data})

    all_pending_obj=to_do_note.objects.filter(status_task='NC')
    print(all_pending_obj)
    msg_list=[]
    id_list=[]
    data_lst=[]
    for i in all_pending_obj:
        msg=i.msg_body
        ids=i.id
        data_lst.append((ids,msg))

    print(data_lst)
    data={'ids':id_list, 'note':msg_list}
    
    # temp=all_pending_obj.values_list('msg_body', flat=True)
    return render(request, 'index.html', {'data':data_lst})

# Create your views here.
