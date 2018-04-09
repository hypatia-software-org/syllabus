Unit 5 - Exploring Python Types part II [HINT]
---

### **Exercises**

In a Python shell:

* Create a "set" named "myset" with the following values in it: "x", "y", "z", and "cats"
* Create a "dictionary" named "mydict" with the following key-value pairs: "Sarah" : 1, "James" : 11, "Sally" : 5, "Bob" : "apples"
* Create a "list" named "mylist" with the following values in it: "apples", "cats", "dogs", "cats"
* Use a List Comprehension to only print the word "cats" for "mylist" which you created previously
* Create a tuple named "mytuple" with the following values in it: "cats", "dogs", "puppies", "kittens"
* Demonstrate the Immutability of "mytuple"

### References

* [Data Structures (tutorial)](https://docs.python.org/3.5/tutorial/datastructures.html)

### Hints

Create a "set" named "myset" with the following values in it: "x", "y", "z", and "cats"

    >>> myset = { "x", "y", "z", "cats" }
    >>> myset
    { "x", "y", "z", "cats" }

Create a "dictionary" named "mydict" with the following key-value pairs: "Sarah" : 1, "James" : 11, "Sally" : 5, "Bob" : "apples"

    >>> mydict = { "Sarah" : 1, "James" : 11, "Sally" : 5, "Bob" : "apples" }
    >>> mydict
    { "Sarah" : 1, "James" : 11, "Sally" : 5, "Bob" : "apples" }

Create a "list" named "mylist" with the following values in it: "apples", "cats", "dogs", "cats"

Use a List Comprehension to only print the word "cats" for "mylist" which you created previously

    >>> [ item for item in mylist if item == 'cats' ]

Create a tuple named "mytuple" with the following values in it: "cats", "dogs", "puppies", "kittens"

    >>> mytuple = ("cats", "dogs", "puppies", "kittens")
    >>> mytuple
    ('cats', 'dogs', 'puppies', 'kittens')

Demonstrate the Immutability of "mytuple" (show that values in a tuple cannot be modified)

    >>> mytuple[0] = 'a'
    Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    TypeError: 'str' object does not support item assignment
  