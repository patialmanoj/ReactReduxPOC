import * as types from '../actions/actionTypes';
// function handle the action
// accept the state and return the new state
export default function courseReducer(state = [], action){
    switch(action.type){
       
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        
        default:
            return state;    
    }

}