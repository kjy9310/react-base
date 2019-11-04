import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { combinedReducers } from './store';
import createSagaMiddleware from 'redux-saga';
import { combinedSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ];

const store = createStore(combinedReducers, applyMiddleware(...middlewares))

sagaMiddleware.run(combinedSaga)

ReactDOM.render(
    <Provider store={store}>
	<App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
