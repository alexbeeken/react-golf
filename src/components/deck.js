import React, { Component } from 'react';

class Deck extends Component {
  render() {
    return (
      <div className='deck card'>
        {this.props.cards.toString()}
      </div>
    )
  }
}

export default Deck;
