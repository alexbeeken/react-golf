/*
  MATCH
  if in the same grouping of 4
  0 - 3 Aces
  4 - 7 Twos
  etc...

  SCORES
  0 - 3 (ace) = -2
  4 - 43 (numbers) = number value
  44 - 47 (jack/queen) = 10
  48 - 51 (kings) = 0

  COMBO SCORING
  NOT MATCH     = score + score
  < 3 and MATCH = -4
  > 3 and MATCH = 0
*/

const isAce = function(card) {
  return card < 4
}

const isKing = function(card) {
  return 48 <= card && card <= 51
}

const isNumber = function(card) {
  return 4 <= card && card <= 43
}

const isJackQueen = function(card) {
  return 44 <= card && card <= 47
}

const scorePair = function(card1, card2) {
  switch(true) {
    case isAce(card1) && isAce(card2):
      return -4
    case group(card1) === group(card2):
      return 0
    default:
      return score(card1) + score(card2)
  }
}

const group = function(card) {
  return Math.floor(card / 4)
}

const score = function(card) {
  switch (true) {
    case isAce(card):
      return -2
    case isNumber(card):
      return group(card)
    case isJackQueen(card):
      return 10
    case isKing(card) < 52:
      return 0
    default:
      return 500
  }
}

module.exports = {
  scorePair(card1, card2) {
    return scorePair(card1, card2)
  },
  scorePlayer(cards) {
    return scorePair(cards[0], cards[1])
    + scorePair(cards[2], cards[3])
    + scorePair(cards[4], cards[5])
  }
};
