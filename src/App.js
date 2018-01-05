import React, { Component } from 'react';
import Deck from './components/deck.js'
import './App.css';

const FIRST_PLAYER = 0
const NUMBER_OF_DECKS = 1
const STARTING_DECK = Array.from(new Array(52 * NUMBER_OF_DECKS), (x,i) => i)
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
      player: FIRST_PLAYER,
      pile: [],
      drawIndex: 0
    }
  }

  drawCard(card) {
    var updatedDeck = this.state.deck.slice(this.state.drawIndex, 1)
    var pile = this.state.pile.push(card)
    this.setState({
      deck: updatedDeck,
      pile: pile,
      drawIndex: this.state.drawIndex + 1
    })
    if (this.state.deck.length === 0) {
      this.setState({
        deck: this.state.pile,
        pile: [],
        drawIndex: 0
      })
    }
  }

  render() {
    return (
      <div className="Golf">
        <Deck cards={this.state.deck} />
      </div>
    );
  }
}

export default App;
