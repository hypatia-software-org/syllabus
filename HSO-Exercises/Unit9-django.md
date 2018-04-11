Unit 9 - Creating your First Django App!
----

Now that you an work with virtual environments we can install the Web-based framework library known as Django. First lets make sure our environment we set up in the previous section is `activated`:

     hypatian@hypatia:~/just-testing$ source .venv
     (.venv) hypatian@hypatia:~/just-testing$

Now lets install Django 2!

     (.venv) hypatian@hypatia:~/just-testing$ pip install Django==2.0.3
     ...

We can confirm Django is installed by using the `django-admin` utility to check what *version* of Django we are using:

     (.venv) hypatian@hypatia:~/just-testing$ django-admin --version
     2.0.3

Django helps us create a modern web application with a clear division of what each file does. When we start a new Django project we use the `Django-admin` utility to create the initial directories and files we will need to start building our web application. To create our new Django project in your *current* directory use the following command:

     (.venv) hypatian@hypatia:~/just-testing$ django-admin startproject firstproject .

After you run the above command it will create the following files and directories for you:

* manage.py - Script used to manage your Django project. Can even start a built-in web server to run your project!
* firstproject/ - Directory your Django project files are stored in.
* firstproject/__init.py__ - Empty file that tells Django that your project needs to be loaded.
* firstproject/settings.py - Configuration file for your Django project.
* firstproject/urls.py - URL declarations file. This is where you set what valid URLs your application take (example: http://localhost:8000/page1, http://localhost:8000/page2)
* firstproject/wsgi.py - Used for WSGI compatible web servers (don't worry about this for now).

Now that we have a working file structure, it is time to **start our development server**. We can do this with `manage.py` script's `runserver` command. While our virtual environment is activated run the following command to start your server:

     (.venv) hypatian@hypatia:~/just-testing$ python manage.py runserver
     Performing system checks...
     
     System check identified no issues (0 silenced).
     
     You have unapplied migrations; your app may not work properly until they are applied.
     Run 'python manage.py migrate' to apply them.
     
     April 10, 2018 - 15:50:53
     Django version 2.0, using settings 'mysite.settings'
     Starting development server at http://127.0.0.1:8000/
     Quit the server with CONTROL-C.

The development server is now *running*! Good work! You can confirm it is running by using Firefox from inside the Hypatia Developers Image (or locally from a web-browser of your choice) and navigate to the following URL: http://localhost:8000

If everything went right you should the Django "Congratulations" page.

To stop the server type `CTRL+C` in the terminal you started the development server in.

### **Exercises**

In your `hypatia-exercises` repository:

* Create a new directory named `unit9-django`.
* Install a Python virtual environment (make sure to specify python3!) into the `unit9-django` directory.
* Use the `django-admin` command to start a new project in the `unit9-django' directory.
* Add and commit your new project files and push them to your GitHub repository (make sure you do **not** commit your virtual environment!).