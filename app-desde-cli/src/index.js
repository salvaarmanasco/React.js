import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import AppClass from './containers/AppClass/AppClass';
// import AppFunction from './containers/AppFunction/AppFunction';
// Alternar entre <AppClass /> y <AppFunction /> en el ReactDOM.render()!
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();