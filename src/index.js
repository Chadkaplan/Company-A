import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mycomp from './components';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Mycomp />
  </React.StrictMode>,
  document.getElementById('root')
);