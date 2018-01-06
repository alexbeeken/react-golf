import React, { Component } from 'react';
import Deck from './components/deck'
import Hand from './components/hand'
import Board from './components/board'
import Discard from './components/discard'
import './App.css'
import { newGame, drawCard } from './utility/actions'

class App extends Component {
  constructor(props) {
    super(props),
    this.state = newGame()
  }

  render() {
    return (
      <div className='golf'>
        <div className='top'>
          <Deck cards={this.state.deck} />
          <Discard cards={this.state.discard} />
        </div>
        <Board cards={this.state.board} />
        <Hand card={this.state.hand} />
      </div>
    );
  }
}

export default App;
