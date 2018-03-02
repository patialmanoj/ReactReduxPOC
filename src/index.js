//* eslint-disable no-console */
//console.log('hi babes');
import 'babel-polyfill';
import React from 'react';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './route.js';
import {loadCourses} from './actions/courseActions';
//import {loadBeers} from './actions/beerActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
//store.dispatch(loadBeers());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
     document.getElementById('app')
);
