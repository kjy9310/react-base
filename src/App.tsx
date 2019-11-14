import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from './Routes';
// import styled from 'styled-components';

const App: React.FC = () => {
//	const img = styled.img`
//		width: 10px;
//	`
  return (
    <Router>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
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
