import React, { Component } from 'react';
import Deck from './components/deck'
import Hand from './components/hand'
import './App.css';

const STARTING_DECK = Array.from(new Array(52), (x,i) => i)
const shuffle = function(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: shuffle(STARTING_DECK),
      playerHand: []
    }
  }

  drawCard() {
    var deck = this.state.deck
    var playerHand = this.state.playerHand
    playerHand.push(deck[0])
    deck = deck.slice(1)
    this.setState({
      deck: deck,
      playerHand: playerHand
    })
  }

  render() {
    return (
      <div className="Golf">
        <Deck cards={this.state.deck} />
        <Hand cards={this.state.playerHand} />
        <button onClick={this.drawCard.bind(this)}>draw card</button>
      </div>
    );
  }
}

export default App;
