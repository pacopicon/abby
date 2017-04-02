import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './App';
import Game from './Game';
import TestTrack from './TestTrack';
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

ReactDOM.render(
  <TestTrack />,
  document.getElementById('testTrack')
);
