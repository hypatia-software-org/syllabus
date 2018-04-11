Unit 9 - Creating your First Django App, part 2!
----

As we continue along, lets use our `just-testing` directory we created in the previous section. First lets make sure we activate the virtual enviorment if we have not already:

     hypatian@hypatia:~/just-testing$ source .venv/bin/activate
     (.venv) hypatian@hypatia:~/just-testing$

We can now create our app inside the Django project we created in the pervious section. To do this we will need to use the `manage.py` scirpt's `startapp` command:

     (.venv) hypatian@hypatia:~/just-testing$ python manage.py startapp blog

This will create a new *directory* named blog with the following files and directories inside it:

* blog/__init.py__ - Empty file that tells Django to load this app.
* blog/admin.py - File for setting up Django Admin.
* blog/apps.py - File for initializing this app.
* blog/migrations/ - Directory that stores Django `migrations` used to manage your database.
* blog/modals.py - File for defining your `modals`, these are Python Classes that define objects in the database.
* blog/tests.py - File for defining `tests` to test that your app works as intended.
* blog/views.py - File for defining `views`, this controls the content users see on your app.

To get started we will want to create our first `view`. This will allow us to display content to the user from our web app. We start this by using our text editor to open the `blog/views.py` file and adding the following content to it:

     from django.http import HttpResponse
     
     
     def index(request):
     return HttpResponse("Hello, world. You're at the polls index.")

### **Exercises**

In your `hypatia-exercises` repository:

* Create

### References:

* [Writing your first Django app, part 2](https://docs.djangoproject.com/en/2.0/intro/tutorial02/)