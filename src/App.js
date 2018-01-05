import React, { Component } from 'react';
import './App.css';

const NUMBER_OF_DECKS = 1
const DECK = Array.from(new Array(52 * NUMBER_OF_DECKS), (x,i) => i)

class App extends Component {
  constructor() {
    super(props)
    this.state = {
      deck: DECK,
      player: 0,
    }
  }
  render() {
    return (
      <div className="Golf">
      </div>
    );
  }
}

export default App;
