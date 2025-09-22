// Challenge Task: Calculator Object

/*
Problem:
Create a calculator object with methods:

=> add(a, b) that returns the sum of two numbers.
=> subtract(a, b) that returns the difference.
=> multiply(a, b) that returns the product.
=> divide(a, b) that returns the quotient (handle division by zero).
*/ 

const calculator = {
    add: function (a, b) { 
        console.log(a+b);
    },
    minus: function (a, b) { 
        console.log(a-b);
    },
    multiply: function (a, b) { 
        console.log(a*b);
    },
    divide: function (a, b) {
        if (b === 0) { console.log("Error! Can't divide by zero") 
            return;
        };
        console.log(a/b);
    },

}

calculator.divide(10, 5);