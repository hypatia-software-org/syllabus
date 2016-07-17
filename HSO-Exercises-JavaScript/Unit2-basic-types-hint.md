Unit2 - Exploring JavaScript (Integers/Strings/Lists)
---

### **Excercise**

In a Node.js shell:

* Add, subtract, multiply, divide and exponentiate 9 and 3
* Concatenate "koala" and "bear" with a space in between them
* Put an integer list into a variable, add the second to the first and store it back into the first element
* Put a string list into a variable, concatenate the second to the first and store it back into the first element
* Append two new elements to the back of each list
* Remove the second and third element to create a new list

* Make a list with five elements, 'koalas', 'are', 'are', 'arr', 'cute'
* Extend the list with another list ['and', 'so', 'are', 'sloths']
* Append the string '!'
* Now count the number of occurances of the word 'sloths', 'koalas', and the word 'are'
* Remove the third and fourth element
* Create a string by joining all remaining elements and putting a space in between them
* Sort the array
* Reverse the array

* Create a list of lists, one of strings and the other of strings.  Show the third elements in each.


### References

* [MDN a Re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### **Hint**

Add, subtract, multiply, divide and exponentiate 9 and 3

    > 9+3
    12
    > 9 - 3
    6
    > 9 *3
    27
    > 9/3
    3
    > Math.pow(9,3)
    729

Find the quotient of 12512501 and 19761.  Find the remainder (modulo).

    > var numerator = 12512501
    undefined
    > var denominator = 19761
    undefined
    > numerator / denominator
    633.1916907039117
    > Math.floor( numerator / denominator )
    633
    > var quotient = Math.floor( numerator / denominator )
    undefined
    > var remainder = numerator % denominator
    undefined
    > remainder
    3788
    > denominator * quotient + remainder
    12512501


Concatenate "koala" and "bear" with a space in between them

    > "koala" + " " + "bear"
    'koala bear'

Put an integer list into a variable, add the second to the first and store it back into the first element

    > var x = [2, 3, 5]
    undefined
    > x
    [ 2, 3, 5 ]
    > x[0] = x[0] + x[1]
    5
    > x
    [ 5, 3, 5 ]

Put a string list into a variable, concatenate the second and third to the first and store it back into the first element

    > var y = [ "koala", " ", "bear" ]
    undefined
    > y
    [ 'koala', ' ', 'bear' ]
    > y[0] = y[0] + y[1] + y[2]
    'koala bear'
    > y
    [ 'koala bear', ' ', 'bear' ]
    > y[0]
    'koala bear'

Append two new elements to the back of each list

    > y.push('s')
    4
    > y.push(' are cute!')
    5
    > y
    [ 'koala bear',
      ' ',
      'bear',
      's',
      ' are cute!' ]
    > y.join(' ^-^ ')
    'koala bear ^-^   ^-^ bear ^-^ s ^-^  are cute!'

Remove the second and third elements

    > y.splice(1,1)
    [ ' ' ]
    > y
    [ 'koala bear',
      'bear',
      's',
      ' are cute!' ]
    > y.splice(2,1)
    [ 's' ]
    > y
    [ 'koala bear',
      'bear',
      ' are cute!' ]

Koalas and sloths:

    > var  z = [ 'koalas', 'are', 'are', 'arr', 'cute' ]
    undefined
    > z = z.concat(['and', 'so', 'are', 'sloths'])
    [ 'koalas',
      'are',
      'are',
      'arr',
      'cute',
      'and',
      'so',
      'are',
      'sloths' ]
    > z.push('!')
    10
    > z
    [ 'koalas',
      'are',
      'are',
      'arr',
      'cute',
      'and',
      'so',
      'are',
      'sloths',
      '!' ]
    > z
    [ 'koalas',
      'are',
      'are',
      'arr',
      'cute',
      'and',
      'so',
      'are',
      'sloths',
      '!' ]
    > z.splice(2,2)
    [ 'are', 'arr' ]
    > z
    [ 'koalas',
      'are',
      'cute',
      'and',
      'so',
      'are',
      'sloths',
      '!' ]
    > z.join(" ")
    'koalas are cute and so are sloths !'
    > z.sort()
    [ '!',
      'and',
      'are',
      'are',
      'cute',
      'koalas',
      'sloths',
      'so' ]
    > z.reverse()
    [ 'so',
      'sloths',
      'koalas',
      'cute',
      'are',
      'are',
      'and',
      '!' ]

List of lists:

    > var q = [["cute", "koala", "bears"], [3, 5, 7]]
    undefined
    > q[0]
    [ 'cute', 'koala', 'bears' ]
    > q[1]
    [ 3, 5, 7 ]
    > q[0][2]
    'bears'
    > q[1][2]
    7
