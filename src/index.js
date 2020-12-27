import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore,compose } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
//import {} from 'react-red'
//import Demo from './Demo';
import thunk from 'redux-thunk';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import reduxReset from 'redux-reset';
import { logger } from 'redux-logger';
import reportWebVitals from './reportWebVitals';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
const persistedState = loadFromLocalStorage();


var createStoreWithMiddleware = compose(applyMiddleware(thunk,loadingBarMiddleware(),logger),reduxReset())(createStore);

const store = createStoreWithMiddleware(
  appReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
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
reportWebVitals();
