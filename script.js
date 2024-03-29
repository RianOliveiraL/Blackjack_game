let player = {
  name: 'player1',
  chips: 200,
  guest: 'player2',
  chips2: 200
}
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ''
let sum = 0
let run = false
const messageEl = document.querySelector('#message-el')
const sumEl = document.querySelector('#sum-el')
const cardsEl = document.querySelector('#cards-el')
const playerEl = document.querySelector('#player-el')

//about player2
const sum2El = document.querySelector('#sum2-el')
const cards2El = document.querySelector('#cards2-el')
const player2El = document.querySelector('#player2-el')
const Start2Btn = document.querySelector('#player2Start')
const Cards2Btn = document.querySelector('#player2-Cards')
//player1 message

playerEl.textContent = player.name + ': $' + player.chips

// player2 message
player2El.textContent = player.guest + ': $' + player.chips2

// game mechanics functions
function startGame() {
  if ((run === false && isAlive === false) || hasBlackJack === true) {
    const firstCard = getRandomCard()
    const secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
  }
}

// generate random card function

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard > 10) {
    return 10
  } else if (randomCard === 1) {
    return 11
  }
  return randomCard
}

function renderGame() {
  run = true
  cardsEl.textContent = 'Cards: '
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }
  sumEl.textContent = `Sum: ${sum}`
  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
    run = true
  } else if (sum === 21) {
    message = "You've got a Blackjack!"
    hasBlackJack = true
    run = false
  } else {
    message = "You're out of the game"
    isAlive = false
    run = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    const card = getRandomCard()
    sum += card
    cards.push(card)

    renderGame()
  }
}

// multiplayer
