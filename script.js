let player = {
  name: 'Rian',
  chips: 200,
};
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = '';
let sum = 0;
const messageEl = document.querySelector('#message-el');
const sumEl = document.querySelector('#sum-el');
const cardsEl = document.querySelector('#cards-el');
const playerEl = document.querySelector('#player-el');

playerEl.textContent = player.name + ': $' + player.chips;
function startGame() {
  const firstCard = getRandomCard();
  const secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  }
  return randomCard;
}
function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got a Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    const card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
}
