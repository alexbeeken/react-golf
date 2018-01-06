import React, { Component } from 'react';

class Discard extends Component {
  render() {
    return (
      <div class='discard'>
        {this.props.cards.toString()}
      </div>
    )
  }
}

export default Discard;
