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

const times = i => fn => {
  if (i > 0) {
    fn()
    times (i - 1) (fn)
  }
}

const deal = function(state, index) {
  for (var i = 0; i < 6; i++) {
    state.board[i] = state.deck[0]
    state.deck = state.deck.slice(1)
  }
  return state
}

module.exports = {
  newGame() {
    var state = {
      board: [],
      deck: shuffle(STARTING_DECK),
      hand: null,
    }
    return deal(state)
  },
};

/*
all actions:
1. draw a single card from deck and place it in Hand
1. draw a single card from discard and place it in Hand
2. discard a card in Hand
3. replace a card on board with hand
4. discard a card from the board
5.
*/
