import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div class='board'>
        {this.props.cards.toString()}
      </div>
    )
  }
}

export default Board;
