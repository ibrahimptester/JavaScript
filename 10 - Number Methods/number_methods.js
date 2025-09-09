/* 
JavaScript Number Methods: toFixed(), parseInt(), parseFloat()
*/

// toFixed
let bignumber = 8.55515522;
console.log("Only showing two characters after the point:", bignumber.toFixed(2))

//parseInt
let str1 = "25"
console.log(typeof str1);
str1 = parseInt(str1);
console.log(typeof str1);

// binary (base 2) to integer (base 10)
let bin = "1011"
console.log("The integer value of 1011 is:", parseInt(bin, 2));

//hex values base 16
let hex = "fff"
console.log("The integer value of fff is:", parseInt(hex, 16));

//Parsefloat
let object = {
    "name" : "Cotton",
    "Price" : "20.50",
    "Quantity" : "10"
}
let totalAmount = parseFloat(object.Price) * parseFloat(object.Quantity)
console.log("The total price of cottons is:", totalAmount)





