from django.shortcuts import render, get_object_or_404
from . import models


# Create your views here.
def index(request):
    return render(request, "index.html", )

def contact(request):
    return render(request, "contact.html", )

def about(request):
    return render(request, "about.html", )

def currentSteeds(request):
    return render(request, "current-prestige-steeds.html", )

def soldSteeds(request):
    return render(request, "rehomed-prestige-steeds.html", )

def steedDetail(request, pk):
    bike = get_object_or_404(models.Bikes, pk=pk)
    context = {'bike': bike}
    return render(request, 'prestige-steed-detail.html', context)
