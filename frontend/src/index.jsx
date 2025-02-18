import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promisse from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import App from './main/App';
import reducers from './main/reducers';

const store = applyMiddleware(thunk, multi, promisse)(createStore)(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);