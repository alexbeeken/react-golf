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

  boardCard(index) {
    return <div
      className='boardCard card'
      onClick={
        () => this.handleClick(index)
      }>
      {this.isShowing(index) && this.face(index)}
    </div>
  }

  isShowing(index) {
    return this.props.showing[index]
  }

  showPair(i1, i2) {
    return this.isShowing(i1) && this.isShowing(i2)
  }

  render() {
    return (
      <div className='board'>
        <div className='pair1'>
          {this.boardCard(0)}
          {this.boardCard(1)}
          <div className='score'>{this.showPair(0, 1) && this.firstPairScore()}</div>
        </div>
        <div className='pair2'>
          {this.boardCard(2)}
          {this.boardCard(3)}
          <div className='score'>{this.showPair(2, 3) && this.secondPairScore()}</div>
        </div>
        <div className='pair3'>
          {this.boardCard(4)}
          {this.boardCard(5)}
          <div className='score'>{this.showPair(4, 5) && this.thirdPairScore()}</div>
        </div>
      </div>
    )
  }
}

export default Board;
