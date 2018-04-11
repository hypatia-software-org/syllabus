Unit 6 - With the right context!
----

When writing and reading from files you will have noticed that you must `close()` them when you are finished working with them. To avoid having to do this you can using Python's built-in context manager `with`. The `with` statement is built-into Python so there is nothing you need to do on your part to start using `with`. So how does `with` help us? Consider this following example:

    >>> myfile = open('mytextfile.txt')
    >>> data = myfile.read()
    >>> myfile.close()
    >>> myfile.closed
    True

You will notice that we must use `close()`. It is a best practice in programming to always close your files as soon as you are done working with them. This frees up unused system resources and stops your programs from using more memory than they need to. You can use `with` to automatically close a file when you are done working with it, here is an example:

    >>> with open('mytextfile.txt') as myfile:
    ...      data = myfile.read()
    ...
    >>> myfile.closed
    True

As you can see by using `with` the file we are working with automatically closes when we move our indention block back a level (the *context* we are working in ends when we de-indent).

### **Exercises**

In your `hypatia-exercises` repository:

* Modify the `unit6.py` program to use `with` to open files so they automatically close when you are done reading and writing from them.
