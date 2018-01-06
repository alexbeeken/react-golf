const STARTING_DECK = Array.from(new Array(52), (x,i) => i)

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

const deal = function(state, index) {
  state.board = state.board.map((i) => {
    var card = state.deck[0]
    state.deck = state.deck.slice(1)
    return card
  })
  state.discard.push(state.deck[0])
  state.deck = state.deck.slice(1)
  return state
}

module.exports = {
  handToBoard(state, index) {
    if (state.hand) {
      var card1 = state.hand
      var card2 = state.board[index]
      state.hand = null
      state.board[index] = card1
      state.discard.unshift(card2)
    }
    return state
  },
  switchDiscardHand(state) {
    if (!state.hand) {
      state.hand = state.discard[0]
      state.discard = state.discard.slice(1)
    } else {
      state.discard.unshift(state.hand)
      state.hand = null
    }
    return state
  },
  deckToHand(state) {
    if (!state.hand) {
      state.hand = state.deck[0]
      state.deck = state.deck.slice(1)
    }
    return state
  },
  newGame() {
    var state = {
      board: [null, null, null, null, null, null],
      deck: shuffle(STARTING_DECK),
      hand: null,
      discard: []
    }
    return deal(state)
  }
};
