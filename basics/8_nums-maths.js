const score = 100;
console.log(score); //100
const balance = new Number(score);
console.log(balance); //[Number: 100]
console.log(balance.toLocaleString()) //100
console.log(balance.toLocaleString().length) //3
console.log(balance.toFixed(3)); //100.000
const otherNumber = 23.23425
console.log(otherNumber.toPrecision(4)); //23.23
const newNumber = 123.23425
console.log(newNumber.toPrecision(4)); //123.2
const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,00,000
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_VALUE); //1.7976931348623157e+308

/* 
            MATHS LIBRARY
*/ 

console.log(Math); //Object [Math] {}
console.log(Math.abs(-5)); //5
console.log(Math.round(23.234)); //23
console.log(Math.ceil(23.234));  //24
console.log(Math.floor(23.234)); //23
console.log(Math.max(1,2,3,4,5)); //5
console.log(Math.min(1,2,3,4,5)); //1



console.log(Math.random()); // always between 0 and 1
console.log(Math.floor(Math.random()*10+1)); //always between 1 and 10


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1) + min)); //always gives values between min and max values
 

