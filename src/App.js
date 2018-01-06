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
    var num_players = 3
    this.state = newGame(num_players)
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
    var boards = this.state.boards.map((board) => {
                    return <Board
                              cards={board}
                              handleClick={this.handleClick.bind(this)} />
                  })
    return (
      <div className='golf'>
        <div className='top'>
          <Deck cards={this.state.deck} handleClick={this.handleClick.bind(this)} />
          <Discard cards={this.state.discard} handleClick={this.handleClick.bind(this)} />
          {this.state.hand !== null && <Hand card={this.state.hand} />}
        </div>
        {boards}
        <h1>{this.state.turns}</h1>
      </div>
    );
  }
}

export default App;
