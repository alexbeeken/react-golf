import React, { Component } from 'react';

class Hand extends Component {
  render() {
    return (
      <div class='hand'>
        {this.props.cards.toString()}
      </div>
    )
  }
}

export default Hand;
