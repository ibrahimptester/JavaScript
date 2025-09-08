/* 
Common String methods are: length, toUpperCase, toLowerCase, subString, slice, trim
*/

// Length Count
let length = "123456789"
console.log(length.length)

// toUpperCase
let message = "I want every letter in upper case!"
console.log(message.toUpperCase())

// toLowerCase
console.log(message.toLowerCase());

//slice ( letter) substring is same just it does not accept negative value
console.log(message.slice(13, 19))

// trim

let trimer = '    trim    '
console.log(trimer.trim())
