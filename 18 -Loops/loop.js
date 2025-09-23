// for loop, while loop, do while loop

// For loop

for (let i=1; i <= 5; i++) {
    console.log(i);
};

// while loop
console.log("While Loop: ------")
let n = 5

while ( n >= 0) {
    console.log(n)
    n--;
}
/*
// Do while loop // try in browser
console.log('Do while loop: --------')
let password;
do {
    password = prompt("Enter Your Password")
} while (password != "1234");
console.log("Success")

*/

// looping through array using for and for of

// using for 

let array = ["Tanzid", "Nayeem", "Saif", "Liton", "Mustafiz", "Taskin"]

for (let i=0; i <= 5; i++) {
    console.log(array[i]);
}

// Using for of method
console.log("Using for of method ----------")

for (let player of array ) {
    console.log(player)
}


// Controlling loop using break (stop) and continue (skip)

for (let i=1; i <= 10; i++) {
    if (i === 3 )
        break;
    console.log(i)
}  // 1, 2

for (let i=1; i <= 10; i++) {  
    if (i === 3 )
        continue;
    console.log(i)
}  // 1,2,4,5,6,7,8,9,10

