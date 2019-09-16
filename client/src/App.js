import React from 'react';
import './App.css';
import Player from './components/Player';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="container">
          <Player />
        </div>
      </header>
    </div>
  );
}

export default App;
