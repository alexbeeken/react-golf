import {gameEnd} from './game'
import {scorePlayer} from './score'

const blankBoard = function() {
  return [null, null, null, null, null, null]
}

const dealBoards = function(state) {
  state.boards = state.boards.map((board) => {
    return board.map(() => {
      var card = state.deck[0]
      state.deck = state.deck.slice(1)
      return card
    })
  })
  return state
}

const discardOne = function(state) {
  state.discard.push(state.deck[0])
  state.deck = state.deck.slice(1)
  return state
}

const newBoards = function(numPlayers) {
  return Array.from(new Array(numPlayers), () => blankBoard())
}

const newDeck = function() {
  return shuffle(Array.from(new Array(52), (x,i) => i))
}

const shuffle = function(deck) {
  var j, x, i;
  for (i = deck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = deck[i];
      deck[i] = deck[j];
      deck[j] = x;
  }
  return deck
}

const roundStart = function(state) {
  state.deck = newDeck()
  state.boards = newBoards(state.numPlayers)
  state.boardShowings = newBoards(state.numPlayers)
  state.discard = []
  state.hand = null
  state.turnsRemaining = null
  state.allCardsShowing = false
  state.currentPlayer = 0

  state = dealBoards(state)
  return discardOne(state)
}

const roundEnd = function(state) {
  var highestScore = -200
  var highestPlayer = state.currentPlayer
  state.scores = state.scores.each((roundScores, playerIdx) => {
    var score = scorePlayer(state.boards[playerIdx])
    if (score > highestScore) {
      highestScore = score
      highestPlayer = playerIdx
    }
    roundScores[playerIdx] = score
  })
  state.rounds += 1
  if (state.rounds >= state.numRounds) {
    return gameEnd(state)
  } else {
    state.currentPlayer = highestPlayer
    return module.exports.roundStart(state)
  }
}

export {
  roundEnd,
  roundStart
}
