const accountId = 1136
let accountEmail = "asimkumarhansda@gmail.com"
var accountPassword = "this password is weak"
/*
Prefer not to use var 
because issue in block scope and function scope
*/
// not preferred
accountCity = "Kharagpur"
// accountId = 1 // not allowed
accountEmail = "asimkrhansda@outlook.com"
accountPassword = "this password was changed"
accountCity = "new york"
let accountState;
console.log(accountId); 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
console.error("this is error")