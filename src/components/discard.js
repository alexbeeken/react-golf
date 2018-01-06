import React, { Component } from 'react';

class Discard extends Component {
  render() {
    return (
      <div class='discard card'>
        {this.props.cards.toString()}
      </div>
    )
  }
}

export default Discard;
