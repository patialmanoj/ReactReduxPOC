import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type){
    return type.substring(type.length -8) == '_SUCCESS';
}

// function handle the action
// accept the state and return the new state
export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action){
    if( action.type ==  types.BEGIN_AJAX_CALLS)
        return state+1;
    else if( action.type == types.AJAX_CALLS_ERROR || actionTypeEndsInSuccess(action.type)){
        return state-1;
    }
    return state;        
}
