Unit 3 - Flow
---

### **Exercise**

* For each element in the list ["koala", "koala", "koala", "sloth", "koala"], print it out with the string "s are cute!" appended to each.
* For each element in the list ["koala", "koala", "koala", "sloth", "koala"], print it out with the string "s are cute!" if it's a sloth and
  print "s are kinda cute" if it's a koala.

* While the list ["koala", "koala", "koala", "sloth", "koala"] is not empty, remove the first element and print it out
* While the list ["koala", "koala", "koala", "sloth", "koala"] is not empty, remove the first element but only print it out if it's a sloth

* Print out the numbers from 5 to 111
* Print out the numbers from 5 to 111 but only if they're divisible by 5 or 3 but not both.

### References

* [Python tutorial on Control Flow](https://docs.python.org/3.5/tutorial/controlflow.html)

### **Hint**

    >>> mylist =  ["koala", "koala", "koala", "sloth", "koala"]
    >>> for v in mylist:
    ...     print v + "s are cute!"
    ... 
    koalas are cute!
    koalas are cute!
    koalas are cute!
    sloths are cute!
    koalas are cute!


    >>> mylist = ["koala", "koala", "koala", "sloth", "koala"]
    >>> for v in mylist:
    ...     if v == "sloth":
    ...         print v + "s are cute!"
    ...     elif v == "koala":
    ...         print v + "s are kinda cute"
    ...     else:
    ...         print v + "s are ok"
    ... 
    koalas are kinda cute
    koalas are kinda cute
    koalas are kinda cute
    sloths are cute!
    koalas are kinda cute


    >>> mylist = ["koala", "koala", "koala", "sloth", "koala"]
    >>> while len(mylist) > 0:
    ...     v = mylist.pop(0)
    ...     print v
    ... 
    koala
    koala
    koala
    sloth
    koala


    >>> mylist = ["koala", "koala", "koala", "sloth", "koala"]
    >>> while len(mylist) > 0:
    ...     v = mylist.pop(0)
    ...     if v == "sloth":
    ...         print v
    ... 
    sloth


    >>> for x in range(5,112):
    ...     print x
    ... 
    5
    6
    7
    ...
    109
    110
    111


    >>> for x in range(5,112):
    ...     if ((x%5) == 0) and ((x%3) == 0):
    ...         pass
    ...     elif (x%5) == 0:
    ...         print x
    ...     elif (x%3) == 0:
    ...         print x
    ... 
    5
    6
    9
    10
    12
    18
    ...
