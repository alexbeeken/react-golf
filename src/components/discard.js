import React, { Component } from 'react';

class Discard extends Component {
  render() {
    return (
      <div className='discard card' onClick={() => this.props.handleClick({ pile: 'discard' })}>
        {this.props.cards.toString()}
      </div>
    )
  }
}

export default Discard;
