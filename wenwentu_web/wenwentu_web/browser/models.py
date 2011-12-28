from django.db import models
from django.utils.datetime_safe import datetime

# Create your models here.
class Template(models.Model):
    def __unicode__(self):
        return self.name + " (" + self.english_name + ") "
    date_created = models.DateTimeField(default=datetime.now(), null=None)
    date_modified = models.DateTimeField(default=datetime.now(), null=None)
    votes = models.IntegerField(default=0)
    name = models.CharField(max_length = 400)
    english_name = models.CharField(max_length = 200)

class Tu(models.Model):
    def __unicode__(self):
        return self.upper_text + " " + self.lower_text
    template = models.ForeignKey(Template)
    date_created = models.DateTimeField(default=datetime.now(), null=None)
    date_modified = models.DateTimeField(default=datetime.now(), null=None)
    votes = models.IntegerField(default=0)
    upper_text = models.CharField(max_length = 2048)
    lower_text = models.CharField(max_length = 2048)
