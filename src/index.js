import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {createStore} from 'redux';
//import appReducers from './reducers/index'
//import {} from 'react-red'
//import Demo from './Demo';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
/*
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
