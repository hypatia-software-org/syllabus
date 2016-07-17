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

* [MDN tutorial on Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
* [MDN tutorial on Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

### **Hint**

    > var  mylist =  ["koala", "koala", "koala", "sloth", "koala"]
    undefined
    > for (var i=0; i<mylist.length; i++) {
    ...   console.log(mylist[i] + "s are cute!");
    ... }
    koalas are cute!
    koalas are cute!
    koalas are cute!
    sloths are cute!
    koalas are cute!
    undefined

    > var  mylist =  ["koala", "koala", "koala", "sloth", "koala"]
    undefined
    > for (var i=0; i<mylist.length; i++) {
    ...   if (mylist[i]=="sloth") {
    .....   console.log(mylist[i] + "s are cute!");
    ..... } else if (mylist[i] == "koala") {
    .....   console.log(mylist[i] + "s are kinda cute");
    ..... } else {
    .....   console.log(mylist[i] + "s are ok");
    ..... }
    ... }
    koalas are kinda cute
    koalas are kinda cute
    koalas are kinda cute
    sloths are cute!
    koalas are kinda cute
    undefined

    > var  mylist =  ["koala", "koala", "koala", "sloth", "koala"]
    undefined
    > while (mylist.length>0) {
    ...   var a = mylist.splice(0,1);
    ...   console.log(a[0]);
    ... }
    koala
    koala
    koala
    sloth
    koala
    undefined

    > var  mylist =  ["koala", "koala", "koala", "sloth", "koala"]
    undefined
    > while (mylist.length>0) {
    ...   var a = mylist.splice(0,1);
    ...   if (a[0] == "sloth") {
    .....   console.log(a[0]);
    ..... }
    ... }
    sloth
    undefined

    > for (var x = 5; x<112; x++) {
    ...   console.log(x);
    ... }
    5
    6
    7
    ...
    109
    110
    111
    undefined

    > for (var x = 5; x<112; x++) {
    .......   if ( ((x%5)==0) && ((x%3)==0) ) {
    .........   continue;
    ......... } else if ((x%5)==0) {
    .........   console.log(x);
    ......... } else if ((x%3)==0) {
    .........   console.log(x);
    ......... }
    ....... }
    5
    6
    9
    10
    12
    18
    20
    21
