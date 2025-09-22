// iteration in array using for 

const cardName = [0, "P.E.K.K.A", "Battle Ram", "Royal Ghost", "Bandit", "Arrows", "Executioner"]

for (let i = 1; i < cardName.length; i += 2){
    console.log(cardName[i])
}

// iteration using forEach
console.log("Using forEach -------")
cardName.forEach((card) => console.log(card));

// iteration using map 
console.log("Using Map -------")
cardName.map((card) => console.log(card))
