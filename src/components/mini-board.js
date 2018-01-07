import React, { Component } from 'react';

class MiniBoard extends Component {
  render() {
    return (
      <div className='miniBoard'>
        <p>{this.props.name}</p>
        <div className='miniBoardCard miniCard'>{this.props.cards[0]}</div>
        <div className='miniBoardCard miniCard'>{this.props.cards[1]}</div>
        <div className='miniBoardCard miniCard'>{this.props.cards[2]}</div>
        <div className='miniBoardCard miniCard'>{this.props.cards[3]}</div>
        <div className='miniBoardCard miniCard'>{this.props.cards[4]}</div>
        <div className='miniBoardCard miniCard'>{this.props.cards[5]}</div>
      </div>
    )
  }
}

export default MiniBoard;
