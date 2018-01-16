import { roundStart } from './round'

const newScoreBoard = function(numPlayers) {
  return Array.from(new Array(numPlayers), () => [])
}

const pickRandom = function(numPlayers) {
  return Math.floor(Math.random() * numPlayers)
}

const sumFinalScores = function(state) {
  state.finalScores = state.scores.map((score) => {
    return score.reduce((accum, score) => accum + score)
  })
  return state
}

const gameStart = function (options) {
  var state = {
    numPlayers: options['numPlayers'],
    numRounds: options['numRounds'],
    rounds: 0,
    scores: newScoreBoard(options['numPlayers']),
    currentPlayer: pickRandom(options['numPlayers'])
  }
  return roundStart(state)
}

const gameEnd = function(state) {
  return sumFinalScores(state)
}

export {gameStart, gameEnd}
