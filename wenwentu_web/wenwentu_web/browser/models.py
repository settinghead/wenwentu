from django.db import models

# Create your models here.
class Template(models.Model):
    def __unicode__(self):
        return self.name + " (" + self.english_name + ") "
    date_created = models.DateTimeField()
    date_modified = models.DateTimeField()
    votes = models.IntegerField()
    name = models.CharField(max_length = 200)
    english_name = models.CharField(max_length = 200)

class Tu(models.Model):
    def __unicode__(self):
        return self.upper_text + " " + self.lower_text
    template = models.ForeignKey(Template)
    date_created = models.DateTimeField()
    date_modified = models.DateTimeField()
    votes = models.IntegerField()
    upper_text = models.CharField(max_length = 2048)
    lower_text = models.CharField(max_length = 2048)
    