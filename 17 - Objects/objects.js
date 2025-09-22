// Creating and Accessing Objects

let car = {
    name: "BMW",
    model: "abcd-1234",
    year: "2002",
    on: function () {
        console.log("Started");
    },
    off: function () {
        console.log("Stopped");
    },
    info: function () {
        console.log(`The Cars name is ${this.name}.
The cars model is ${this.model}.
The Release year is ${this.year}.`)
    }
}

console.log(car.name) // dot notation
console.log(car["name"]) // bracket notation

car.on();
car.off();
car.info();

// modifying objects

car.name = "New Name"
console.log(car.name)

