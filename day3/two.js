/* Array
splice method of array
Splice is very useful method as it can remove and add elements from the particular location.

let number_arr = [ 20, 30, 40, 50, 60 ]; 
number_arr.splice(1, 3); //delete element from index 1 to 3
console.log("After splice op " + number_arr); 

*/
/* string
slice method
The slice() method extract a part of a string and returns the extracted parts in a new string:

let str = "Apple, Banana, Kiwi";
let res = str.slice(7,13);
console.log("after slice",res);
*/

/*
substring method
The substring() method extract a part of a string and returns the extracted parts in a new string:
The difference is that substring() cannot accept negative indexes.

let str = "Apple, Banana, Kiwi";
let res = str.substring(7,13);
console.log(res);
*/

/*
replace
The replace() method replaces a specified value with another value in a string:
let str = "Please visit google!";
console.log("before replace:",str)
let n = str.replace("google", "letsupgrade");
console.log("after replace:",n)
*/