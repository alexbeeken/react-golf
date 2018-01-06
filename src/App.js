import React, { Component } from 'react';
import Deck from './components/deck'
import Hand from './components/hand'
import Board from './components/board'
import './App.css'
import { newGame, drawCard } from './utility/actions'

class App extends Component {
  constructor(props) {
    super(props),
    this.state = newGame()
  }

  render() {
    return (
      <div className="Golf">
        <Deck cards={this.state.deck} />
        <Hand card={this.state.hand} />
        <Board cards={this.state.board} />
      </div>
    );
  }
}

export default App;
