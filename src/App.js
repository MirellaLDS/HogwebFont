import React from 'react';
import logo from './logo.svg';
import dev from './dev.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web site está em desenvolvimento
        </p>
        <img src={dev} alt="Em desenvolvimento" />
      </header>
    </div>
  );
}

export default App;
