import React, { Component } from 'react';

class Deck extends Component {
  render() {
    return (
      <div class='deck card'>
        {this.props.cards.toString()}
      </div>
    )
  }
}

export default Deck;
