import React, { Component } from 'react';
import Deck from './components/deck'
import Hand from './components/hand'
import Board from './components/board'
import MiniBoard from './components/mini-board'
import Discard from './components/discard'
import Info from './components/info'
import './styles/App.css'
import './styles/top.css'
import './styles/card.css'
import './styles/mini-boards.css'
import { gameStart } from './utility/game'
import {
  currentBoard,
  currentShowing,
  deckToHand,
  discardToHand,
  handEmpty,
  handToBoard,
  handToDiscard
  } from './utility/turn'
import { cardFace, cardFaces } from './utility/card-faces'

class App extends Component {
  constructor(props) {
    super(props)
    var options = {
      numPlayers: 2,
      numRounds: 1
    }
    this.state = gameStart(options)
  }

  handleClick(options) {
    switch(options['pile']) {
      case 'discard':
        if (!handEmpty(this.state)) {
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
          {this.state.winner && <h1>WINNER IS {this.state.winner}!!</h1>}
          <div class='piles'>
            <Deck
              handleClick={this.handleClick.bind(this)}
              drewFromDeck={this.state.drewFromDeck} />
            <Discard
              cards={cardFaces(this.state.discard)}
              handleClick={this.handleClick.bind(this)} />
              <Hand card={cardFace(this.state.hand)} />
          </div>
          <Board
            cards={currentBoard(this.state)}
            handleClick={this.handleClick.bind(this)}
            showing={currentShowing(this.state)} />
        </div>
        <div className='other'>
          <Info state={this.state} />
          <div className='minis'>
            {miniBoards}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
