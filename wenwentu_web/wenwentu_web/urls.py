from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('wenwentu_web.browser.views',
    # Examples:
    # url(r'^$', 'wenwentu_web.views.home', name='home'),
    # url(r'^wenwentu_web/', include('wenwentu_web.foo.urls')),
    url(r'^$', 'index'),
    url(r'^template/$', 'template_index'),
    url(r'^template/create$', 'template_create'),
    url(r'^template/(?P<template_id>\d+)/$', 'template_detail'),
    url(r'^tu/$', 'tu_index'),
    url(r'^tu/(?P<tu_id>\d+)/$', 'tu_detail'),
    
    (r'^stockphoto/', include('stockphoto.urls')),


    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
