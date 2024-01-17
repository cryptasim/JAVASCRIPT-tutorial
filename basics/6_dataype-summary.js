/* 
Call by value and Call by reference 

Primitive : Call by value : Copy karke diya jata hei: changes are made in the copy only
{
    7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
}

Reference Type  (Non Primitive) : Call by reference : inka reference allocate kiya jaa sakta hei
{
    3 types: Arrays, Objects, Functions 
}

JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

Return type of variables in JavaScript
1) Primitive Datatypes 
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

let id = Symbol("123");
console.log(typeof id); //symbol
let anotherId = Symbol("123");
console.log(typeof anotherId); //symbol
console.log(id === anotherId); //false

let cars = ["Audi", "BMW", "Mercedes"];
console.log(typeof cars); //object
console.log(cars); //[ 'Audi', 'BMW', 'Mercedes' ]
let myObj = {
  name: "Asim",
  age: 18,
  supple: true,
};
console.log(typeof myObj); //object
console.log(myObj); //{ name: 'Asim', age: 18, supple: true }
const myFunction = function fun1() {
  console.log("Hello World");
};
console.log(typeof myFunction); //function
console.log(myFunction); //[Function: fun1]

/* 
  stack (primitive), heap(non-primitive)
*/

let myYoutube = "No Channel";
let anothername = myYoutube;
anothername = "Mr Best";
console.log(anothername); // Mr Best
console.log(myYoutube); //No Channel

let user = {
  email: "user@email.com",
  upi_id: "user@bank",
};
console.log(user.email); //user@email.com
let newuser = user;
newuser.email = "newuser@email.com";
console.log(user.email); //newuser@email.com
console.log(newuser.email); //newuser@email.com
