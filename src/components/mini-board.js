import React, { Component } from 'react';

class MiniBoard extends Component {
  miniCard(index) {
    return (
      <div className='miniBoardCard miniCard'>
        {this.props.showing[index] && this.props.cards[index]}
      </div>
    )
  }

  render() {
    // FIX MY COLUMNS PLEASE
    return (
      <div className='miniBoard'>
        <p>{this.props.name}</p>
        {this.miniCard(0)}
        {this.miniCard(1)}
        {this.miniCard(2)}
        {this.miniCard(3)}
        {this.miniCard(4)}
        {this.miniCard(5)}
      </div>
    )
  }
}

export default MiniBoard;
