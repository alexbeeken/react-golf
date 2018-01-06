import React, { Component } from 'react';

class Hand extends Component {
  render() {
    return (
      <div class='hand'>
        {this.props.card}
      </div>
    )
  }
}

export default Hand;
