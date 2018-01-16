import React, { Component } from 'react';
import { scorePlayer } from '../utility/score'
import { currentBoard } from '../utility/turn'

class Hand extends Component {
  render() {
    var state = this.props.state
    return (
      <div className='info'>
        <h5>turns: {state.turns}</h5>
        <h5>currentPlayer: {state.currentPlayer}</h5>
        <h5>score: {scorePlayer(currentBoard(state))}</h5>
        <h5>turnsRemaining: {state.turnsRemaining}</h5>
        <h5>round: {state.rounds}</h5>
        <h5>scoreBoard: {state.scores}</h5>
      </div>
    )
  }
}

export default Hand;
