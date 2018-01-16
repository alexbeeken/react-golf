import React, { Component } from 'react';
import Deck from './components/deck'
import Hand from './components/hand'
import Board from './components/board'
import MiniBoard from './components/mini-board'
import Discard from './components/discard'
import './App.css'
import { gameStart } from './utility/game'
import {
  currentBoard,
  currentShowing,
  deckToHand,
  discardToHand,
  handToBoard,
  handToDiscard
  } from './utility/turn'
import { cardFace, cardFaces } from './utility/card-faces'
import { scorePlayer } from './utility/score'

class App extends Component {
  constructor(props) {
    super(props)
    var options = {
      numPlayers: 3,
      numRounds: 4
    }
    this.state = gameStart(options)
  }

  handleClick(options) {
    switch(options['pile']) {
      case 'discard':
        if (this.state.drewFromDeck || this.state.hand) {
          this.setState(handToDiscard(this.state))
        } else {
          this.setState(discardToHand(this.state))
        }
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
    var miniBoards = this.state.boards.map((board, index) => {
      return <MiniBoard
                cards={board}
                key={index}
                name={index}
                showing={this.state.boardShowings[index]} />
    })
    return (
      <div className='golf'>
        <div className='top'>
          <Deck
            handleClick={this.handleClick.bind(this)} />
          <Discard
            cards={cardFaces(this.state.discard)}
            handleClick={this.handleClick.bind(this)} />
          {this.state.hand !== null && <Hand card={cardFace(this.state.hand)} />}
        </div>
        <Board
          cards={currentBoard(this.state)}
          handleClick={this.handleClick.bind(this)}
          showing={currentShowing(this.state)} />
        <div className='minis'>
          {miniBoards}
        </div>
        <h1>turns: {this.state.turns}</h1>
        <h1>currentPlayer: {this.state.currentPlayer}</h1>
        <h1>score: {scorePlayer(currentBoard(this.state))}</h1>
        <h1>turnsRemaining: {this.state.turnsRemaining}</h1>
      </div>
    );
  }
}

export default App;
