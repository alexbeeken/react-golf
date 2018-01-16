import React, { Component } from 'react';
import { scorePlayer, sumFinalScores } from '../utility/score'
import { currentBoard } from '../utility/turn'

class Hand extends Component {
  render() {
    var state = this.props.state
    var totals = sumFinalScores(state.scores)
    var scoreBoard = state.scores.map((scores, index) => {
      return (
        <ul>
          {index}
          {scores.map((score) => { return <li>{score}</li> })}
          <li>{totals[index]}</li>
        </ul>
      )
    })
    return (
      <div className='info'>
        <ul>
          <li>turns: {state.turns}</li>
          <li>currentPlayer: {state.currentPlayer}</li>
          <li>score: {scorePlayer(currentBoard(state))}</li>
          <li>turnsRemaining: {state.turnsRemaining}</li>
          <li>round: {state.rounds}</li>
          <li>scoreBoard:
            <div class='score-board'>
              {scoreBoard}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Hand;
