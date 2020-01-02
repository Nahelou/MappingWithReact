import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Première app React.<br />
          Toujours du webmapping
        </p>
        <a
          className="App-link"
          href="https://nahelou.github.io/site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retour à l'écran d'accueil
        </a>
      </header>
    </div>
  );
}

export default App;
