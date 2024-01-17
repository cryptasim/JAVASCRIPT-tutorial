let score = 33;
console.log(typeof score); //number
let value = "33";
console.log(typeof value); //string
let nums = Number(value);
console.log(typeof nums); //number
console.log(nums); //33

/*
"33" => 33
"33abc" => NaN
true => 1 false => 0
*/
 
let isLoggedin = 1;
let isBoolean = Boolean(isLoggedin);
console.log(typeof isBoolean); //boolean
console.log(isBoolean); //true

/*
1 => true; 0 => false 
" " => false 
"Asim" => true
*/ 

let someNumber = 1136
let stringNumber = String(someNumber)
console.log(typeof stringNumber); //string
console.log(stringNumber); //1136  