/* 
Math Objects for complex math : Math.round, Math.random, Math.Max
*/

//Math.round
//removes numbers after . point. adds if 5 or above 5.

let round = 4.44;
console.log(Math.round(round));

//Math.ceil
let ceil = 4.0000001
console.log(Math.ceil(ceil)); // result 5 which is unfair in case of price!!

// Math.floor
let floor = 4.99999999;
console.log(Math.floor(floor));

//Math.random for 0-1
let random = Math.random()
console.log(random)

//Math.random for higher numbers - used for otp or random uid
let otp = Math.floor( 1000 + Math.random() * 900000);
console.log(otp)

// Math.max
// Finding the largest number
let max = [25, 59, 105, 608]
console.log("The largest number is:", Math.max(...max))

