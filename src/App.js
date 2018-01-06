import React, { Component } from 'react';
import Deck from './components/deck'
import Hand from './components/hand'
import Board from './components/board'
import Discard from './components/discard'
import './App.css'
import { newGame, switchDiscardHand, handToBoard, deckToHand } from './utility/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = newGame()
  }

  handleClick(options) {
    switch(options['pile']) {
      case 'discard':
        this.setState(switchDiscardHand(this.state))
        break
      case 'board':
        this.setState(handToBoard(this.state, options['index']))
        break
      case 'deck':
        this.setState(deckToHand(this.state))
        break
      default:
        break
    }
  }

  render() {
    return (
      <div className='golf'>
        <div className='top'>
          <Deck cards={this.state.deck} handleClick={this.handleClick.bind(this)} />
          <Discard cards={this.state.discard} handleClick={this.handleClick.bind(this)} />
          {this.state.hand && <Hand card={this.state.hand} />}
        </div>
        <Board cards={this.state.board} handleClick={this.handleClick.bind(this)} />
        <h1>{this.state.turns}</h1>
      </div>
    );
  }
}

export default App;
