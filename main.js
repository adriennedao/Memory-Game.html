////console.log("JS file is connected to HTML! Woo!");

// represents the cards of the game
var cards = ['queen', 'queen', 'king', 'king'];

// represents the cards in play
var cardsInPlay = [];

// var cardOne = 'king';
// var cardTwo = 'king';
// var cardThree = 'queen';
// var cardFour = 'queen';

//if (cardOne === cardTwo) {
//	alert('You found a match!');
//} else {
//  alert('Sorry, try again.');	
//}

 //if (cardThree === cardFour) {
 //alert('You found a match!');
 //} else {
 //	alert('Sorry, try again.');
    

// find the board and set it to a variable
// so that we can add cards to it
var board = document.getElementById("game-board");

//function that will create board
function createBoard() {
	for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
	board.appendChild(cardElement);
	board.appendChild(cardElement);
	}	
}
//checks to see if there are cards in play
function isTwoCards() {
// add card to array of cards being viewed
// 'this' is not covered in the pre-work but 
// for now, just know it gives you access to the cardElement you click on	
cardsInPlay.push(this.getAttribute('data-card'));
// show the card's image
console.log(this.getAttribute('data-card'));
if (this.getAttribute('data-card') === 'king') {
	this.innerHTML ="<img src='/Users/kinga/Downloads/king.png'>"; //king
} else {
	this.innerHTML ="<img src='/Users/kinga/Downloads/queen.png'>";//queen
		}
	
		
if (cardsInPlay.length === 2) { //if two cards are chosen
	isMatch(cardsInPlay);//start the function isMatch
	cardsInPlay = [];//clear cards in play array for next try
	}
}
function isMatch(cards){
  if (cards[0] === cards[1]) {
  	 alert("You found a match!");
  } else {
  	 alert("Sorry, try again.");
    }
  }	

createBoard(); 