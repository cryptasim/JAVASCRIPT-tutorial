//array
const myArr = [0,1,2,3,4,true,"Asim"]
const myArr1 = [0,1,2,3,4,5]
console.log(myArr1[5]);
const myArr2 = new Array("JLR", "BMW", "AUDI", "MERC")
console.log(myArr2[3]);

//array methods
// const myArr1 = [0,1,2,3,4,5]
myArr1.push(6)
console.log(myArr1);
myArr1.pop();
console.log(myArr1);
myArr1.unshift(10);
console.log(myArr1);
myArr1.shift();
console.log(myArr1);

// const myArr = [0,1,2,3,4,true,"Asim"]
console.log(myArr.includes(true))
console.log(myArr.indexOf(true));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

const newArr1 = myArr.concat(100,200,300)
console.log(myArr);  
console.log(newArr1);

 //slice splice
const arr = new Array(0,1,2,3,4,5)
console.log("A", arr); //[ 0, 1, 2, 3, 4, 5 ]
const arr1 = arr.slice(1,3)
console.log(arr1); //[ 1, 2 ]
console.log("B",arr); //B [ 0, 1, 2, 3, 4, 5 ]
const arr2 = arr.splice(1,3)
console.log(arr2); //[ 1, 2, 3 ]
console.log("C",arr); //C [ 0, 4, 5 ]
