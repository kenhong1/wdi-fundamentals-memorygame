// this was probably the hardest thing in this whole pre work section...i'm pretty sure parts of my code are incorrect// 



var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];


var cardsInPlay = [];
var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  
  console.log("User flipped " + cards[cardId].rank);

  cardsInPlay.push(cards[cardId].rank);

  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  this.setAttribute('src', cards[cardId].cardImage);

  setTimeout(function(){
    if (cardsInPlay.length === 2) {
    checkForMatch(cardId);
  }
  }, 400);
}

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  
  } else {
    alert("Sorry, try again.");
  }
}
//dom below 
var createBoard = function () {

  for (var i = 0; i < cards.length; i++) {
   
    var cardElement = document.createElement('img');

    cardElement.setAttribute('src', "images/back.png");

    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click', flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}
//finish 
createBoard();