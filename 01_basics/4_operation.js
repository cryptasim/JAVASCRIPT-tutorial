let value = 1;
let negValue = -value;
console.log(value); //1
console.log(negValue); //-1

// basic math operations
console.log(2 + 2); //4
console.log(2 * 3); //6
console.log(2 ** 4); //16
console.log(2 / 5); //0.4
console.log(2 % 6); //2

//string addition
let str1 = "hello";
let str2 = " world";
console.log(str1 + str2);

// string to number conversion
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log(1 + 2 + "2"); //32
console.log("1" + 2 + 2); //122

console.log(+true); //1
console.log(+"");   //0

let gameCounter = 100
gameCounter++
console.log(gameCounter); //101
++gameCounter
console.log(gameCounter); //102

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"