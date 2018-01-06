import React, { Component } from 'react';

class Deck extends Component {
  render() {
    return (
      <div className='deck card'
        onClick={() => this.props.handleClick({ pile: 'deck' })}>
        {this.props.cards.toString()}
      </div>
    )
  }
}

export default Deck;
