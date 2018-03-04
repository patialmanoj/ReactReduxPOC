import * as types from '../actions/actionTypes';
import initialState from './initialState';
// function handle the action
// accept the state and return the new state
export default function authorReducer(state = initialState.authors, action){
    switch(action.type){
       
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        
        default:
            return state;    
    }

}