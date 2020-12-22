import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppEvents from './AppEvents';
import AppForm from './AppForm';
import AppNesting from './AppNesting';
import AppProps from './AppProps';
import AppState from './AppState';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AppForm />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
