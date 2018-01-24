import { roundStart } from './round'
import { sumFinalScores } from './score'

const newScoreBoard = function(numPlayers) {
  return Array.from(new Array(numPlayers), () => [])
}

const pickRandom = function(numPlayers) {
  return Math.floor(Math.random() * numPlayers)
}

const finalScores = function(state) {
  state.scores = sumFinalScores(state.scores)
  return state
}

const gameStart = function (options) {
  var state = {
    numPlayers: options['numPlayers'],
    numRounds: options['numRounds'],
    rounds: 0,
    scores: newScoreBoard(options['numPlayers']),
    currentPlayer: pickRandom(options['numPlayers']),
    winner: null
  }
  return roundStart(state)
}

const gameEnd = function(state) {
  var highScore = -200
  var index = 0
  var winner
  sumFinalScores(state.scores).map((score) => {
    if (score > highScore) {
      winner = index
    }
    index += 1
  })
  state.winner = index
  return state
}

export {gameStart, gameEnd}
