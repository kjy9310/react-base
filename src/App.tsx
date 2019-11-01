import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <Routes />
  </Router>
  );
}

export default App;
