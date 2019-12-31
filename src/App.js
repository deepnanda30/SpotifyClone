import React from 'react';
import './App.css';
import Spotify from './components/Spotify';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Spotify />
      </header>
    </div>
  );
}

export default App;
