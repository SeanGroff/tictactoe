import React, { Component } from 'react';
import Board from './Board';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
