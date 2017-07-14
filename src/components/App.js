import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import Board from './Board';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Scoreboard />
        <Board />
      </div>
    );
  }
}

export default App;
