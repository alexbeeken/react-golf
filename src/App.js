import React, { Component } from 'react';
import Deck from './components/deck'
import Hand from './components/hand'
import Board from './components/board'
import MiniBoard from './components/mini-board'
import Discard from './components/discard'
import './App.css'
import { newGame,
         switchDiscardHand,
         handToBoard,
         deckToHand,
         currentBoard,
         currentShowing,
         showBoardCard,
         needsToChose
        } from './utility/actions'
import { cardFace, cardFaces } from './utility/card-faces'
import { scorePlayer } from './utility/score'

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
        if (needsToChose(this.state)) {
          this.setState(showBoardCard(this.state, options['index']))
        } else {
          this.setState(handToBoard(this.state, options['index']))
        }
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
                cards={cardFaces(board)}
                key={index}
                name={index}
                showing={this.state.boardShowings[index]} />
    })
    return (
      <div className='golf'>
        <div className='top'>
          <Deck handleClick={this.handleClick.bind(this)} />
          <Discard cards={cardFaces(this.state.discard)} handleClick={this.handleClick.bind(this)} />
          {this.state.hand !== null && <Hand card={cardFace(this.state.hand)} />}
        </div>
        <Board cards={currentBoard(this.state)} handleClick={this.handleClick.bind(this)} showing={currentShowing(this.state)} />
        <div className='minis'>
          {miniBoards}
        </div>
        <h1>turns: {this.state.turns}</h1>
        <h1>currentPlayer: {this.state.currentPlayer}</h1>
        <h1>score: {scorePlayer(currentBoard(this.state))}</h1>
      </div>
    );
  }
}

export default App;
