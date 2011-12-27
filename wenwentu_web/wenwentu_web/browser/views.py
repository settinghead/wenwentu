# Create your views here.
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the poll index.")

def template_index(request):
    return HttpResponse("Hello, world. You're at the poll index.")

def tu_index(request):
    return HttpResponse("Hello, world. You're at the poll index.")
