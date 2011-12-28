# Create your views here.
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.shortcuts import render_to_response
from wenwentu_web.browser.models import Template

def index(request):
    return HttpResponse("Hello, world. You're at the poll index.")

############ Templates ###############
def template_index(request):
    return HttpResponse("Hello, world. You're at the poll index.")

def template_create(request):
    if request.method == 'POST':
        errors = []
        if not request.POST.get('subject', ''):
            errors.append('Enter a subject.')
        return HttpResponseRedirect('/template/')

        return render_to_response('template_index.html')

    return render_to_response('template_create.html')

def template_detail(request,template_id):
    try:
        template = Template.objects.get(pk=template_id)
    except Template.DoesNotExist:
        raise Http404
    return render_to_response('template_detail.html', {'template': template})

################ Tu ##################
def tu_index(request):
    return HttpResponse("Hello, world. You're at the poll index.")

def tu_detail(request):
    return HttpResponse("Hello, world. You're at the poll index.")
