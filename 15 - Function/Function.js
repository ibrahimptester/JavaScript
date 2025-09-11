/* Function is reusable block of code */

function greet(name){
    console.log(`Welcome back! ${name}`)
}

greet("Ibrahim");

// Function with return value

function summer (num1, num2) {
    return num1 + num2
}


console.log(summer(5, 10))

// Arrow Function
// Console log I am arrow function
const arrowFunction = () => {
    console.log("I am arrow function")
}
arrowFunction();

// Multiply two Number using arrow function + function expression

const multiply = (num1, num2) => num1 * num2;
result = multiply(50, 10)
console.log(result);

// Anonymous Function and callback

const batsman = ["Tamim","Emon","Liton","Hridoy"]

batsman.forEach((batsman) =>
    console.log(`Welcome to pitch, ${batsman}`)
)



