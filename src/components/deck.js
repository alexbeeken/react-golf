import React, { Component } from 'react';

class Deck extends Component {
  render() {
    let text;
    if (this.props.drewFromDeck) {
      text = ''
    } else {
      text = 'draw card'
    }
    return (
      <div className='deck card'
        onClick={() => this.props.handleClick({ pile: 'deck' })}>
        {text}
      </div>
    )
  }
}

export default Deck;
