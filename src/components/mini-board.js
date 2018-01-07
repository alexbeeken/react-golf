import React, { Component } from 'react';
import { scorePair } from '../utility/score'
import { cardFace } from '../utility/card-faces'

class MiniBoard extends Component {
  miniCard(index) {
    return (
      <div className='miniBoardCard miniCard'>
        {this.props.showing[index] && cardFace(this.props.cards[index])}
      </div>
    )
  }

  firstPairScore() {
    return scorePair(this.props.cards[0], this.props.cards[1])
  }

  secondPairScore() {
    return scorePair(this.props.cards[2], this.props.cards[3])
  }

  thirdPairScore() {
    return scorePair(this.props.cards[4], this.props.cards[5])
  }

  isShowing(index) {
    return this.props.showing[index]
  }

  showPair(i1, i2) {
    return this.isShowing(i1) && this.isShowing(i2)
  }

  render() {
    // FIX MY COLUMNS PLEASE
    return (
      <div className='miniBoard'>
        <p>{this.props.name}</p>
        <div className="miniPair">
          {this.miniCard(0)}
          {this.miniCard(1)}
          <div className="miniScore">
            {this.showPair(0, 1) && this.firstPairScore()}
          </div>
        </div>
        <div className="miniPair">
          {this.miniCard(2)}
          {this.miniCard(3)}
          <div className="miniScore">
            {this.showPair(2, 3) && this.secondPairScore()}
          </div>
        </div>
        <div className="miniPair">
          {this.miniCard(4)}
          {this.miniCard(5)}
          <div className="miniScore">
            {this.showPair(4, 5) && this.thirdPairScore()}
          </div>
        </div>
      </div>
    )
  }
}

export default MiniBoard;
