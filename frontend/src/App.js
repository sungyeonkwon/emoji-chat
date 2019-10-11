import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Emoji Burst</h1>
        </header>
        <Chat />
      </div>
    );
  }
}

export default App;
