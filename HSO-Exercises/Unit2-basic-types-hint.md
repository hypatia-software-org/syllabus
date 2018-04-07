Unit 2 - Exploring Python (Integers/Strings/Lists)
---

### **Excercise**

In a Python shell:

* Add, subtract, multiply, divide and exponentiate 9 and 3
* Concatenate "koala" and "bear" with a space in between them
* Put an integer list into a variable, add the second to the first and store it back into the first element
* Put a string list into a variable, concatenate the second to the first and store it back into the first element
* Append two new elements to the back of each list
* Remove the second and third element to create a new list

* Make a list with five elements, 'koalas', 'are', 'are', 'arr', 'cute'
* Extend the list with another list ['and', 'so', 'are', 'sloths']
* Append the string '!'
* Count the number of occurances of the word 'sloths', 'koalas', and the word 'are'
* Remove the first element whose value is 'are'
* Now count the number of occurances of the word 'sloths', 'koalas', and the word 'are'
* Pop the third element
* Create a string by joining all remaining elements and putting a space in between them

* Find the index of where the string 'sloths' occurs
* Create a new list with the third element, the two elements before the element 'sloths', and the element 'sloths'
* Reverse it and join them into a string with a space separator

* Create a list [10, 3, 1, 50, 10] and sort it

* Create a list of lists, one of strings and the other of strings.  Show the third elements in each.

### References

* [Basic Types in Python](https://docs.python.org/3.3/tutorial/introduction.html)
* [List Data Structures](https://docs.python.org/2/tutorial/datastructures.html)


### **Hint**

Add, subtract, multiply, divide and exponentiate 9 and 3

    >>> 3**5
    243
    >>> 9+3
    12
    >>> 9 - 3
    6
    >>> 9 *3
    27
    >>> 9/3
    3
    >>> 9**3
    729

Find the quotient of 12512501 and 19761.  Find the remainder (modulo).

    >>> numerator = 12512501
    >>> denominator = 19761
    >>> numerator / denominator
    633
    >>> quotient = numerator / denominator
    >>> remainder = numerator % denominator
    >>> print quotient, remainder
    633 3788
    >>> denominator * quotient + remainder
    12512501


Concatenate "koala" and "bear" with a space in between them

    >>> "koala" + " " + "bear"
    'koala bear'

Put an integer list into a variable, add the second to the first and store it back into the first element

    >>> x = [ 2, 3, 5 ]
    >>> x
    [2, 3, 5]
    >>> x[0] = x[0] + x[1]
    >>> x
    [5, 3, 5]

Put a string list into a variable, concatenate the second and third to the first and store it back into the first element

    >>> y = [ "koala", " ", "bear" ]
    >>> y
    ['koala', ' ', 'bear']
    >>> y[0] = y[0] + y[1] + y[2]
    >>> y
    ['koala bear', ' ', 'bear']
    >>> y[0]
    'koala bear'


Append two new elements to the back of each list

    >>> y.append('s')
    >>> y.append(' are cute!')
    >>> y
    ['koala bear', ' ', 'bear', 's', ' are cute!']
    >>> ' ^-^ '.join(y)
    'koala bear ^-^   ^-^ bear ^-^ s ^-^  are cute!'


Remove the second and third elements

    >>> del y[1]
    >>> del y[2]
    >>> y
    ['koala bear', 'bear', ' are cute!']


Koalas and sloths:

    >>> z = [ 'koalas', 'are', 'are', 'arr', 'cute' ]
    >>> z
    ['koalas', 'are', 'are', 'arr', 'cute']
    >>> z.extend(['and', 'so', 'are', 'sloths'])
    >>> z
    ['koalas', 'are', 'are', 'arr', 'cute', 'and', 'so', 'are', 'sloths']
    >>> z.append('!')
    >>> z
    ['koalas', 'are', 'are', 'arr', 'cute', 'and', 'so', 'are', 'sloths', '!']
    >>> z.count("koalas")
    1
    >>> z.count("sloths")
    1
    >>> z.count("are")
    3
    >>> z.remove('are')
    >>> z
    ['koalas', 'are', 'arr', 'cute', 'and', 'so', 'are', 'sloths', '!']
    >>> z.count("are")
    2
    >>> z.pop(2)
    'arr'
    >>> z
    ['koalas', 'are', 'cute', 'and', 'so', 'are', 'sloths', '!']
    >>> " ".join(z)
    'koalas are cute and so are sloths !'


Creating new lists, reversing

    >>> i = z.index('sloths')
    >>> i
    6
    >>> w = z[2:3] + z[i-2:i+1]
    >>> w
    ['cute', 'so', 'are', 'sloths']
    >>> w.reverse()
    >>> w
    ['sloths', 'are', 'so', 'cute']
    >>> " ".join(w)
    'sloths are so cute'


Integer list and sorting

    >>> t = [10, 3, 1, 50, 10]
    >>> t
    [10, 3, 1, 50, 10]
    >>> t.sort()
    >>> t
    [1, 3, 10, 10, 50]


List of lists:

    >>> q = [["cute", "koala", "bears"], [3, 5, 7]]
    >>> q[0]
    ['cute', 'koala', 'bears']
    >>> q[1]
    [3, 5, 7]
    >>> q[0][2]
    'bears'
    >>> q[1][2]
    7


