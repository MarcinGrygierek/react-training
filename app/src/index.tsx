import React from 'react';
import ReactDOM from 'react-dom';
import ApiComponent from './ApiComponent';
import App from './App';
import AppEvents from './AppEvents';
import AppForm from './AppForm';
import AppLikes from './AppLikes';
import AppNesting from './AppNesting';
import AppProps from './AppProps';
import AppState from './AppState';
import AsyncAwaitComponent from './AsyncAwaitComponent';
import { Likes } from './LikesRedux/Likes';
import PromiseComponent from './PromiseComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Likes />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
