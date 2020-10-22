import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return (state += 1);
    case 'decrement':
      return (state -= 1);
    default:
      return state;
  }
};

const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
