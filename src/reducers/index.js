import {combineReducers} from 'redux';
import courses from './courseReducer';
//import beers from './beerReducer';
import authors from './authorReducer';

// our app genterally have multiple reducers so we can compbine them all under one umebrella
const rootReducer = combineReducers({
    //courses : courses
    // in ES6 if left hand and right hand terms are same .. we can reduce that to below .. short hand property name
    courses,
    //beers,
    authors

});

export default rootReducer;
