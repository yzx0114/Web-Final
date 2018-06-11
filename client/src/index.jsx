import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {Provider} from 'react-redux';

import Main from 'components/Main.jsx';
import {main} from 'states/main-reducers.js';
import {newlendForm} from 'states/newlendform-reducers.js';
import {borrow} from 'states/borrow-reducers.js';
import {arrear} from 'states/arrear-reducers.js';

import 'bootstrap/dist/css/bootstrap.css';

window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        main, newlendForm, borrow, arrear
    }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));

    ReactDOM.render(
        <Provider store={store}>
            <Main />
        </Provider>,
        document.getElementById('root')
    );
};
