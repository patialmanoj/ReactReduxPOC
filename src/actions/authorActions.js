// creating ,deleting and updating aiuthors
import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorSuccess(authors){
    return {type: types.LOAD_AUTHORS_SUCCESS , authors};
}
// thunk
export function loadAuthors(){
    return function(dispatch){ // wrapper function
        dispatch(beginAjaxCall());
        // async call
        return AuthorApi.getAllAuthors().then(authors=>{
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };

}