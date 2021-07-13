
from django.shortcuts import render, redirect

from django.core.mail import send_mail

from django.contrib import messages


def main(request):
		return render(request, 'main/index.html')

def post(request):
		return render(request, 'main/post.html')


def contact(request):
    if request.method == "POST":
        message_name = request.POST['name']
        message_email = request.POST['email']
        message = request.POST['message']
        subject = request.POST['subject']

        send_mail(
            subject+ ' from '+ message_email,#subject
            message,#message
            message_email,#from email
            ['anjugunakar817@gmail.com'],#To Email

            )

        messages.add_message(request, messages.INFO, 'Your message has been recieved,I will respond shortly.')
        return redirect('home')
    else:
        return render(request,'main/index.html',{})

