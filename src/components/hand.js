import React, { Component } from 'react';

class Hand extends Component {
  render() {
    return (
      <div className='hand card'>
        {this.props.card}
      </div>
    )
  }
}

export default Hand;
