// number v/s number comparison => no confusion
 console.log(3 > 2); //true
//different datatype v/s different datatype => confusion
console.log("3" > 1); //true
//type conversion comparison => hence avoid 
console.log(null > 0); //false 
console.log(null < 0); //false 
console.log(null == 0); //flase
console.log(null < 0); //false 
console.log(null <= 0); //true
console.log(null > 0); //false 
console.log(null >= 0); //true
//=== => checks if the datatype is same or not 
console.log("2" === 2); //false 
console.log(2 === 2);  //true