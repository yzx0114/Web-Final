import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import { Provider } from 'react-redux';

import Main from 'components/Main.jsx';
import Login from 'components/Login.jsx';

import LoginMain from 'components/LoginMain.jsx';
import { main } from 'states/main-reducers.js';
import { newlendForm } from 'states/newlendform-reducers.js';
import { borrow } from 'states/borrow-reducers.js';
import { arrear } from 'states/arrear-reducers.js';
import { history } from 'states/history-reducers.js';
import { login } from 'states/login-reducers.js';
import { register } from 'states/login-reducers.js';
import { friend } from 'states/friend-reducer.js';

import 'bootstrap/dist/css/bootstrap.css';

window.onload = function () {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        main, newlendForm, borrow, arrear, history, login, register, friend
    }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));

    ReactDOM.render(
        <Provider store={store}>
            <LoginMain />
        </Provider>,
        document.getElementById('root')
    );
};
