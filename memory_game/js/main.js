console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {	
	if (cardsInPlay[0] === cardsInPlay[1]);
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
};

function flipCard(cardID) {
	console.log("User flipped " + cards[cardID]);
	checkForMatch()
}
flipCard(0)
flipCard(2)



/*
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne)
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/





