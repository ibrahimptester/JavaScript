// logical operators && (and), || (or) practical example

// Upgrading Clash Royal Cards

let gold = 0, card = 0, passRoyal = true;

if ((gold >= 100 && card >= 1000) || (passRoyal)) {
    console.log("Your card is upgraded")
} else if(gold < 100 && card < 1000){
    console.log("You need to wait long time or Buy Pass Royal")
}else if (gold < 100){
    console.log("Get more gold, or buy Pass Royal");   
}else if (card < 1000){
    console.log('You need more cards to upgrade your card, Get more cards or buy Pass Royal')
}