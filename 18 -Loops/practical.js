// Finding Even or ODD numbers from an array

let arrayNumbers = [11,22,313,564,55,56,47,58,29]
// odd numbers
for (let i=0; i < arrayNumbers.length; i++) {
        if ( arrayNumbers[i] % 2 == 0)   // for eve just change == to !=
            continue;
        console.log(arrayNumbers[i])
}

// Removing unwanted items from array

let newArray = [5, 8, "abc", 7, "bcd", 9, "lcd"]

for (let number of newArray) {
    if (typeof number !== "number")
        continue;
    console.log(number);
}
