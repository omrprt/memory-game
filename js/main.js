console.log("Up and running!");

//cards
var cards = ["queen", "queen","king","king"];

//contains the cards that are in play.
var cardsInPlay = [];

var cardOne = cards[0];

//adding cardOne to cardInPlay
cardsInPlay.push(cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

//logic to test if user has picked two cards and compares both cards
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")}
	else {alert("Sorry, try again")}}

	