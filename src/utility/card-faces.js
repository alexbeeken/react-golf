const spades = '\u2660'
const hearts = '\u2665'
const diamonds = '\u2666'
const clubs = '\u2663'

const FACES = [
  'A' + spades,
  'A' + hearts,
  'A' + diamonds,
  'A' + clubs,
  '2' + spades,
  '2' + hearts,
  '2' + diamonds,
  '2' + clubs,
  '3' + spades,
  '3' + hearts,
  '3' + diamonds,
  '3' + clubs,
  '4' + spades,
  '4' + hearts,
  '4' + diamonds,
  '4' + clubs,
  '5' + spades,
  '5' + hearts,
  '5' + diamonds,
  '5' + clubs,
  '6' + spades,
  '6' + hearts,
  '6' + diamonds,
  '6' + clubs,
  '7' + spades,
  '7' + hearts,
  '7' + diamonds,
  '7' + clubs,
  '8' + spades,
  '8' + hearts,
  '8' + diamonds,
  '8' + clubs,
  '9' + spades,
  '9' + hearts,
  '9' + diamonds,
  '9' + clubs,
  '10' + spades,
  '10' + hearts,
  '10' + diamonds,
  '10' + clubs,
  'J' + spades,
  'J' + hearts,
  'J' + diamonds,
  'J' + clubs,
  'Q' + spades,
  'Q' + hearts,
  'Q' + diamonds,
  'K' + clubs,
  'K' + spades,
  'K' + hearts,
  'K' + diamonds,
  'K' + clubs
]

const cardFace = function(card) {
  return FACES[card]
}

module.exports = {
  cardFaces(cards) {
    return cards.map((card) => {
      return cardFace(card)
    })
  },
  cardFace(card) {
    return cardFace(card)
  }
};
