const name = "asim"
const repoCount = 100
console.log(name+repoCount+"value");  //old method
//` ` => backtext => used for string interpolation
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const obj = new String("Asim")
console.log(obj.__proto__); //{}
console.log(obj.toString()); //Asim
console.log(obj.toLowerCase()); //asim
console.log(obj.toString()); //Asim
console.log(obj.toUpperCase()); //ASIM
console.log(obj.toString()); //Asim
console.log(obj.toLocaleLowerCase()); //asim
console.log(obj.toString()); //Asim
console.log(obj.toLocaleUpperCase()); //ASIM
console.log(obj.charAt(0)); //A
console.log(obj.indexOf('A')); //0
console.log(obj.length); //4

const newString = obj.substring(0,4)
console.log(newString);

const anotherString = obj.slice(-4,4)
/* 
 0  1  2  3
 A  s  i  m
-4 -3 -2 -1
*/
console.log(anotherString);

const trimstr = "    Asim    "
console.log(trimstr.trim());

const url = "https://asimkumarhansda.com/asim/kumar/hansda"
console.log(url.replace("asim","$"));

console.log(url.includes('asim'));

 const testStr = "this-is-test-str"
 console.log(testStr.split("-"));
