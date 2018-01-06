import React, { Component } from 'react';

class Board extends Component {
  cardDivs() {

  }

  render() {
    return (
      <div class='board'>
        <div class='boardCard card'>{this.props.cards[0]}</div>
        <div class='boardCard card'>{this.props.cards[1]}</div>
        <div class='boardCard card'>{this.props.cards[2]}</div>
        <div class='boardCard card'>{this.props.cards[3]}</div>
        <div class='boardCard card'>{this.props.cards[4]}</div>
        <div class='boardCard card'>{this.props.cards[5]}</div>
      </div>
    )
  }
}

export default Board;
