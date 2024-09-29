const input = require('sync-input');
let tickets = 0;
const gifts = {
    "Teddy Bear" : 10,
    "Big Red Ball": 5,
    "Huge Bear": 50,
    "Candy": 8,
    "Stuffed Tiger": 15,
    "Stuffed Dragon": 30,
    "Skateboard": 100,
    "Toy Car": 25,
    "Basketball": 20,
    "Scary Mask": 75
}
const giftsArray = [];
for (let gift in gifts) {
    giftsArray.push({
        id: giftsArray.length + 1,
        name: gift,
        cost: gifts[gift]
    })
}
function addTickets(){
    let addedTickets = Number(input("Enter the ticket amount: "));
    if (addedTickets >= 0 && addedTickets <= 1000) {
        tickets+=addedTickets;
        checkTickets();
    }
    else {
        console.log("Please enter a valid number between 0 and 1000.")
    }

}
function checkTickets(){
    console.log(`Total tickets: ${tickets}`);
}

function displayGifts(){
    console.log(`Here's the list of gifts:\n`);
    if (giftsArray.length > 0){
        giftsArray.forEach((gift) => {
            console.log(`${gift.id}- ${gift.name}, Cost: ${gift.cost} tickets`);
        })
    }
    else {
        console.log("Wow! There are no gifts to buy.");
    }

}
let counter = 1;
function buyGift(){
    if (giftsArray.length === 0){
        console.log("Wow! There are no gifts to buy.");
        return;
    }
    let buy = Number(input("Enter the number of the gift you want to get: ")) -counter;
    let chosenGift =   (giftsArray[buy] == null);
    if (chosenGift && !isNaN(buy)){
        console.log("There is no gift with that number!");
    }
    else if (isNaN(buy)) {
        console.log("Please enter a valid number!");
    }
    else if (tickets < giftsArray[buy].cost){
        console.log("You don't have enough tickets to buy this gift.");
        checkTickets();
    }
    else if (tickets >= giftsArray[buy].cost) {
        tickets-= giftsArray[buy].cost;
        console.log(`Here you go, one ${giftsArray[buy].name}!`);
        giftsArray.splice(buy, 1);
        counter++;
        checkTickets();
    }
}

function prompt(){
    let action;
    while (action !== 5){
        console.log();
        console.log("What do you want to do?");
        console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
        action = Number(input());
        if (action >=1 && action <= 5){
            switch (action) {
                case 1:
                    buyGift();
                    break;

                case 2:
                    addTickets();
                    break;
                case 3:
                    checkTickets();
                    break;
                case 4:
                    displayGifts();
                    break;

                case 5:
                    console.log("Have a nice day!");
                    return;
                default:
                    break;
            }
        }
        else {
            console.log("Please enter a valid number!")
        }
    }

}
//start program.

console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
displayGifts();
prompt();
