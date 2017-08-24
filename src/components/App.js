import React from 'react';
import Scoreboard from './Scoreboard';
import Board from './Board';
import '../styles/app.css';

const App = props =>
  <div className="app">
    <Scoreboard />
    <Board />
  </div>;

export default App;
