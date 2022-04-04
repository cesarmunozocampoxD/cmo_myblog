import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MynavBar from './components/navBar/navBar';

ReactDOM.render(
  <React.StrictMode>
    <MynavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

