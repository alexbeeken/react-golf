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
    currentPlayer: pickRandom(options['numPlayers'])
  }
  return roundStart(state)
}

const gameEnd = function(state) {
  var highScore = -200
  var index = 0
  var winner = sumFinalScores(state.scores).each((score) => {
    if (score > highScore) {
      return 0
    }
    index += 1
  })
  alert(winner)
  return winner
}

export {gameStart, gameEnd}
