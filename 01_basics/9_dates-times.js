//Dates 
// let myDate = new Date()
// console.log(myDate); //2024-01-18T19:40:28.342Z
// console.log(myDate.toDateString()); //Thu Jan 18 2024
// console.log(myDate.toISOString()); //2024-01-18T19:44:17.684Z
// console.log(myDate.toJSON()); //2024-01-18T19:44:17.684Z
// console.log(myDate.toTimeString()); //19:44:17 GMT+0000 (Coordinated Universal Time)
// let createDate = new Date(2004, 0 ,2)
// console.log(createDate.toDateString()); //Fri Jan 02 2004

//Time
let arrdate = new Date()
let depdate = new Date("01-22-2024")
let myTimestamp = Date.now() //returns milliseconds from the 1st January 1970
console.log(myTimestamp); //1705607652376
console.log(depdate.getTime()); //1705881600000
