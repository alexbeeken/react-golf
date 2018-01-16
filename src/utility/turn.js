import {roundEnd} from './round'
import {scorePlayer} from './score'

const anyAllCardsShowing = function(state) {
  var res = state.boardShowings.reduce((board) => {
    return board.filter((card) => {
      if (card === 0) {
        return true
      } else {
        return !card
      }
    })
  })
  return res.length === 0
}

const choseTwo = function(state) {
  return numShowingCurrent(state) > 1
}

const currentBoard = function(state) {
  return state.boards[state.currentPlayer]
}

const nextPlayer = function(state) {
  return (state.currentPlayer + 1) % state.boards.length
}

const numShowingCurrent = function(state) {
  return state.boardShowings[state.currentPlayer].reduce((x, i) => x + i )
}

const showBoardCard = function(state, index) {
  if (!state.boardShowings[state.currentPlayer][index]) {
    state.boardShowings[state.currentPlayer][index] += 1
  }
  return state
}

const currentShowing = function (state) {
  return state.boardShowings[state.currentPlayer]
}

const deckToHand = function(state) {
  if (handEmpty(state)) {
    state.hand = state.deck[0]
    state.deck = state.deck.slice(1)
    state.drewFromDeck = true
  }
  return state
}

const handToDiscard = function(state) {
  if (choseTwo(state) && state.hand !== null) {
    state.discard.unshift(state.hand)
    state.hand = null
    if (state.drewFromDeck) {
      state = turnEnd(state)
    }
  }
  return state
}

const handEmpty = function(state) {
  return state.hand === null
}

const discardToHand = function(state) {
  if (choseTwo(state) && handEmpty(state) && !state.drewFromDeck) {
    state.hand = state.discard[0]
    state.discard = state.discard.slice(1)
  }
  return state
}

const handToBoard = function(state, index) {
  if (!choseTwo(state)) {
    state = showBoardCard(state, index)
  } else if (!handEmpty(state)) {
    var card1 = state.hand
    var card2 = currentBoard(state)[index]
    state.hand = null
    state.boards[state.currentPlayer][index] = card1
    state.discard.unshift(card2)
    state = turnEnd(showBoardCard(state, index))
  }
  return state
}

const turnEnd = function(state) {
  if (!state.allCardsShowing && anyAllCardsShowing(state)) {
    state.allCardsShowing = true
    state.turnsRemaining = state.numPlayers - 1
  }
  if (state.allCardsShowing && state.turnsRemaining === 0) {
    return roundEnd(state)
  } else {
    if (state.turnsRemaining) {
      state.turnsRemaining -= 1
    }
    state.currentPlayer = nextPlayer(state)
    return turnStart(state)
  }
}

const turnStart = function(state) {
  state.drewFromDeck = false
  return state
}

export {
  currentBoard,
  currentShowing,
  deckToHand,
  discardToHand,
  handEmpty,
  handToBoard,
  handToDiscard,
  scorePlayer,
  turnEnd,
  turnStart
}
