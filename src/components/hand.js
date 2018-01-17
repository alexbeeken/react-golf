import React, { Component } from 'react';

class Hand extends Component {
  render() {
    var show = !!this.props.card ? 'showing' : 'hidden'
    return (
      <div className={'hand card ' + show}>
        {this.props.card}
      </div>
    )
  }
}

export default Hand;
