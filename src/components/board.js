import React, { Component } from 'react';

class Board extends Component {
  handleClick(index) {
    this.props.handleClick({pile: 'board', index: index})
  }

  render() {
    return (
      <div className='board'>
        <div className='boardCard card' onClick={() => this.handleClick(0)}>{this.props.cards[0]}</div>
        <div className='boardCard card' onClick={() => this.handleClick(1)}>{this.props.cards[1]}</div>
        <div className='boardCard card' onClick={() => this.handleClick(2)}>{this.props.cards[2]}</div>
        <div className='boardCard card' onClick={() => this.handleClick(3)}>{this.props.cards[3]}</div>
        <div className='boardCard card' onClick={() => this.handleClick(4)}>{this.props.cards[4]}</div>
        <div className='boardCard card' onClick={() => this.handleClick(5)}>{this.props.cards[5]}</div>
      </div>
    )
  }
}

export default Board;
