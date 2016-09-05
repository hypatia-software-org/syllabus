Unit 4 - Functions and Modules
---

### **Exercise**

* Write a function to print out "koalas"
* Write a function that returns "sloths"
* Write a function that capitalizes the first letter of a string
* Write a function to square each element in an integer list
* Write a function to return a new list that has each element squared.

* Put these in a module and use them

### References

* [MDN tutorial on Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
* [Creating custom modules](https://howtonode.org/creating-custom-modules)

### Further Reading

* [JavaScript Module Pattern: In-Depth](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)
* [JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
* [The JavaScript Module Pattern](http://javascriptplayground.com/blog/2012/04/javascript-module-pattern/)

### **Hints**


    function koala() {
      console.log("koalas are cute!");
    }

    function sloth() {
      console.log("sloths are cute!");
    }

    function cap(x) {
      if (x.length==0) { return x; }
      return x.slice(0,1).toUpperCase() + x.slice(1)
    }

    function sq(x) {
      return x*x;
    }

    function sq_array(x) {
      for (var i=0; i<x.length; i++) {
        x[i] = x[i]*x[i];
      }
      return x;
    }


Put these into a file called `modules-example.js` and add the following to the end:

    exports.koala = koala;
    exports.sloth = sloth;
    exports.cap = cap;
    exports.sq = sq;
    exports.sq_array = sq_array;


Then from another program or interactive node shell:

    > var mod_example = require("./module-example.js")
    undefined
    > mod_example.koala()
    koalas are cute!
    undefined
    > mod_example.sloth()
    sloths are cute!
    undefined
    > mod_example.cap("cats")
    'Cats'
    > mod_example.sq(3)
    9
    > mod_example.sq_array([3,5,7])
    [ 9, 25, 49 ]
