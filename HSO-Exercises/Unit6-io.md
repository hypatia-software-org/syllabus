Unit 6 - Input and Output
----

In this unit we will be focused on inputting and outputting data to the screen and files. The key things to walk away from this section are:

* How to use `print()` to print a variable or string to the screen.
* How to use `format()` to be fancy about printing variables to the screen.

Lets set with `print()`, open your Python shell so you can follow along. First lets use `print()` to print the string "Printing things":

    >>> print("Printing things")
    Printing things

Now lets create a variable named `mystring` to store a string and use `print()` to print our variable:

    >>> mystring = "Printing things"
    >>> print(mystring)
    Printing things

We can expand on this by creating a new variable named `endingstring` with the value "is fun!" and combining it with `mystring` using the string method `format()`, this is what it looks like:

    >>> endingstring = "is fun!"
    >>> 'Guess what? {} {}'.format(mystring, endingstring)
    'Guess what? Printing things is fun!'

As you can see `format()` combines `mystring` and `endingstring` into the string we provided. The brackets `{}` is where our variables are inserted. The variables are inserted into the `{}` brackets in the order they are given.

Lets put it all together now and `print()` all of our variables while using `format()`:

    >>> print('Guess what? {} {}'.format(mystring, endingstring))
    Guess what? Printing things is fun!

### **Exercises**

In a Python shell:

* Create a variable named `hello` with the value "Hello" and `print()` it to the screen.
* Create a variable `world` with the value "Pythonic World!" and `print()` to the screen.
* Use `format()` to combine the `hello` and `world` variables together, add a space between them.
* Use `print()` to print the `hello` and `world` variables together while using `format()` from the previous exercise.

In your `hypatia-exercises` repository:

**NOTE**: For these exercises you will need to *commit* and *push* your work to https://GitHub.com. If you need to brush up on your Git, check out Unit1 where you set up your GitHub account and pushed to your first Repository: Unit1-using-git.md

* Create a new program named `unit6.py` that prints "Exercise 6!" to the screen (make sure you remember to *add*, *commit*, and *push* your work to GitHub!)


### References

* [Input and Output (tutorial)](https://docs.python.org/3/tutorial/inputoutput.html)
