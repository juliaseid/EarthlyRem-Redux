import './index.css';
import App from './../src/components/App';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware } from 'redux';
import 'firebase/auth';
import firebase from "./firebase";
import middleWareLogger from './middleware/middleware-logger';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import reducer from './reducers/remedies-reducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(applyMiddleware(thunkMiddleware, middleWareLogger));

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


