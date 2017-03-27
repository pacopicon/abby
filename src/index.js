import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './Game';
// import Square from './Square';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
