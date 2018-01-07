import React, { Component } from 'react';
import { cardFace } from '../utility/card-faces'
import { scorePair } from '../utility/score'

class Board extends Component {
  handleClick(index) {
    return this.props.handleClick({pile: 'board', index: index})
  }

  face(index) {
    return cardFace(this.props.cards[index])
  }

  firstPairScore() {
    return scorePair(this.props.cards[0], this.props.cards[1])
  }

  secondPairScore() {
    return scorePair(this.props.cards[2], this.props.cards[3])
  }

  thirdPairScore() {
    return scorePair(this.props.cards[4], this.props.cards[5])
  }

  render() {
    return (
      <div className='board'>
        <div className='pair1'>
          <div className='boardCard card' onClick={() => this.handleClick(0)}>{this.face(0)}</div>
          <div className='boardCard card' onClick={() => this.handleClick(1)}>{this.face(1)}</div>
          <div className='score'>{this.firstPairScore()}</div>
        </div>
        <div className='pair2'>
          <div className='boardCard card' onClick={() => this.handleClick(2)}>{this.face(2)}</div>
          <div className='boardCard card' onClick={() => this.handleClick(3)}>{this.face(3)}</div>
          <div className='score'>{this.secondPairScore()}</div>
        </div>
        <div className='pair3'>
          <div className='boardCard card' onClick={() => this.handleClick(4)}>{this.face(4)}</div>
          <div className='boardCard card' onClick={() => this.handleClick(5)}>{this.face(5)}</div>
          <div className='score'>{this.thirdPairScore()}</div>
        </div>
      </div>
    )
  }
}

export default Board;
