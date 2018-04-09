Unit 4 - Functions and Modules [HINT]
---

### **Exercise**

* Write a function to print out "koalas"
* Write a function that returns "sloths"
* Write a function that capitalizes the first letter of a string
* Write a function to square each element in an integer list
* Write a function to return a new list that has each element squared.

* Put these in a module and use them

### References

* [Functions (tutorial)](https://docs.python.org/3.5/tutorial/controlflow.html#defining-functions)
* [Modules (tutorial)](https://docs.python.org/3.5/tutorial/modules.html)

### **Hints**

    alas():
        print "koalas"

    def sloths():
        return "sloths"

    def capitalize(s):
        return s[0].upper() + s[1:]

    def square_elements(a):
        for k,v in enumerate(a):
            a[k] = v*v

    def return_square_elements(a):
        X = []
        for val in a:
            X.append(val*val) 
        return X


Put these into a file called `mymodule.py`.  Then from another program or interactive
Python shell:

    >>> import mymodule
    >>> mymodule.koalas()
    koalas
    >>> v = mymodule.sloths()
    >>> print v
    sloths
    >>> print mymodule.capitalize("sloths")
    Sloths
    >>> a = [1,2,5,8]
    >>> mymodule.square_elements(a)
    >>> print a
    [1, 4, 25, 64]
    >>> mymodule.return_square_elements([1,2,5,8])
    [1, 4, 25, 64]


