Unit 6 - Reading and writing to files
----

As part of input and output we will now learn how to read and write to and from from files. Python makes this very ease for us by providing several methods for working with file objects. Lets open our Python shell and `write()` a new file:

    >>> myfile = open('/tmp/testingfile.txt')
    >>> myfile.write('Writing to a file in python, yay!')
    >>> myfile.close()

Notice that we must `close()` our file after we are done working with it. We must *always* close our files. Now that we have written a file lets open it and print the contents to the screen:

    >>> myfile = open('/tmp/testingfile.txt')
    >>> file_contents = myfile.read()
    >>> myfile.close()
    >>> print(file_contents)
    Writing to a file in python, yay!

Pratice it a few times until you get the hang of it. Remember to `close()` your file when you are done reading or writing to it.

### **Exercises**

In your `hypatia-exercises` repository:

* Create a file named `inputfile.txt` with a text editor. Edit the file to have the following contents:

inputfile.txt:

    This is line one
    This is line two
    This is line three
    This is line four
    You get the point, this is line five!
    Line six, pick up sticks

* Expand the `unit6.py` program that reads `inputfile.txt` and `print()`s it to the screen.
* Expand the `unit6.py` program to write the contents of the `inputfile.txt` to a new file named `outputfile.txt`.

### References

 * [Reading and Writing Files (tutorial)](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files)
