import * as types from '../actions/actionTypes';
// function handle the action
// accept the state and return the new state
export default function beerReducer(state = [], action){
    switch(action.type){
       
        case types.LOAD_BEER_SUCCESS:
            return action.beers;
            //break;
        default:
            return state;    
    }

}