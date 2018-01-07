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
        <div className="miniPair">
          {this.miniCard(0)}
          {this.miniCard(1)}
        </div>
        <div className="miniPair">
          {this.miniCard(2)}
          {this.miniCard(3)}
        </div>
        <div className="miniPair">
          {this.miniCard(4)}
          {this.miniCard(5)}
        </div>
      </div>
    )
  }
}

export default MiniBoard;
