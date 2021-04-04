import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { h } from 'preact';

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
// window.MyWidget = function(idElement, param1, param2) {
//   alert();
//   let config = {param1, param2};
//   ReactDOM.render(<App config={config} />, document.getElementById(idElement));
//   return this;
// }