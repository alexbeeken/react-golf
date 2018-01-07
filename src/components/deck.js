import React, { Component } from 'react';

class Deck extends Component {
  render() {
    return (
      <div className='deck card'
        onClick={() => this.props.handleClick({ pile: 'deck' })}>
      </div>
    )
  }
}

export default Deck;
