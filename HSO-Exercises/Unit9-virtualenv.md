Unit 9 - Working with Python virtual environments
----

Before we can work with bigger libraries and web development frameworks we must first learn how to work with Python virtual environments (virtualenv). Python's `virtualenv` allow us to install Python libraries locally for only the project we are currently working on. This allows you the developer to install Python libraries in a way that will not conflict with your systems required libraries, and avoid major headaches before they start.

To get started working with virtual environments lets get out our Bash shell (terminal) and create a new directory and change to it to test creating a virtual environment (for a brush up on the command line, see: [Unit1: Command Line](#Unit1-cli)):

     hypatian@hypatia:~$ mkdir just-testing
     hypatian@hypatia:~$ cd just-testing
     hypatian@hypatia:~/just-testing$

Now that we have a place to test things lets create our first virtual environment, and activate it:

     hypatian@hypatia:~/just-testing$ virtualenv --python=python3 .venv
     hypatian@hypatia:~/just-testing$ ls -a
     . .. .venv
     hypatian@hypatia:~/just-testing$ source .venv/bin/activate
     (.venv) hypatian@hypatia:~/just-testing$

You will notice that when you `activate` your virtual environment it puts the directory name of the virtual environment, in this case `(.venv)`, in-front of your prompt. Make sure you always check to see if your virtual environment is activated! Failing to check this will make your commands run against your operating system, instead of safely inside your virtual environment. Lets now use our virtual environment to install the very powerful `requests` library. This library will let us write a quick demonstration program that gets a web-page. Using `pip` we can install the `requests` library into our virtual environment. Don't forget to make sure you see a `(.venv)` in front of your prompt:

     (.venv) hypatian@hypatia:~/just-testing$ pip install requests
     ...

Now that we have the `requests` library installed we can use it! Here is a simple example of using requests to get the content of the HypatiaSoftware.org homepage. Here we will start our Python shell while inside our virtual environment:

     (.venv) hypatian@hypatia:~/just-testing$ python
     ...

Now that we are inside our Python shell, lets get started with `requests`:

     >>> import requests
     >>> request = requests.get('https://hypatiasoftware.org')
     >>> request.text
     ...

When you are done working with your project, make sure to `deactivate` your virtual environment (alternatively, you can close your terminal):

     (.venv) hypatian@hypatia:~/just-testing$ deactivate
     hypatian@hypatia:~/just-testing$

Note the `(.venv)` marker has vanished from our prompt.

### **Exercises**

In your `hypatia-exercises` repository:

* Add a python3 virtual environment to your `hypatia-exercises` directory, make sure you **do not** check it into git. (never check your virtual environment directory into git).
* Install the `requests` library into the virtual environment you just created.
* Create a new program named `unit9.py` that does the following: Gets the content of *this* web-page and print it to the screen.

### References:

* [Python Virtual Environment Guide](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
* [Python Requests Quickstart Guide](http://www.python-requests.org/en/master/user/quickstart/)
