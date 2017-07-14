import React, { Component } from 'react';
import GameInfo from './GameInfo';
import ChooseSymbol from './ChooseSymbol';
import Scoreboard from './Scoreboard';
import Board from './Board';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <GameInfo />
        <ChooseSymbol />
        <Scoreboard />
        <Board />
      </div>
    );
  }
}

export default App;
