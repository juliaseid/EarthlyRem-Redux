import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './../src/components/App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/remedies-reducer';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import middleWareLogger from './middleware/middleware-logger';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, middleWareLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


