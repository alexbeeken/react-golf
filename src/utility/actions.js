const STARTING_DECK = Array.from(new Array(52), (x,i) => i)
const BLANK_BOARD = [null, null, null, null, null, null]

const deal = function(state, index) {
  state.boards = state.boards.map((board) => {
      return board.map(() => {
        var card = state.deck[0]
        state.deck = state.deck.slice(1)
        return card
      })
    })
  state.discard.push(state.deck[0])
  state.deck = state.deck.slice(1)
  return state
}

const newTurn = function(state) {
  if (state.deck.length === 0) {
    state = refreshDeck(state)
  }
  state.turns += 1
  state.drewFromDeck = false
  state.currentPlayer = nextPlayer(state)
  return state
}

const nextPlayer = function(state) {
  return (state.currentPlayer + 1) % state.boards.length
}

const refreshDeck = function(state) {
  state.deck = shuffle(state.discard)
  state.discard = [state.deck[0]]
  state.deck = state.deck.slice(1)
  return state
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

const currentBoard = function(state) {
  return state.boards[state.currentPlayer]
}

module.exports = {
  handToBoard(state, index) {
    if (state.hand) {
      var card1 = state.hand
      var card2 = currentBoard(state)[index]
      state.hand = null
      state.boards[state.currentPlayer][index] = card1
      state.discard.unshift(card2)
      state = newTurn(state)
    }
    return state
  },
  switchDiscardHand(state) {
    if (state.hand === null) {
      state.hand = state.discard[0]
      state.discard = state.discard.slice(1)
    } else {
      state.discard.unshift(state.hand)
      state.hand = null
      if (state.drewFromDeck) {
        state = newTurn(state)
      }
    }
    return state
  },
  deckToHand(state) {
    if (state.hand === null) {
      state.hand = state.deck[0]
      state.deck = state.deck.slice(1)
      state.drewFromDeck = true
    }
    return state
  },
  currentBoard(state) {
    return currentBoard(state)
  },
  newGame(num_players) {
    var boards = Array.from(new Array(num_players), (x) => BLANK_BOARD)
    var state = {
      deck: shuffle(STARTING_DECK),
      hand: null,
      discard: [],
      turns: 0,
      drewFromDeck: false,
      boards: boards,
      currentPlayer: Math.floor(Math.random() * boards.length)
    }
    return deal(state)
  }
};
