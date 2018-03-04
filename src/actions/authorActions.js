// creating ,deleting and updating aiuthors
import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';


export function loadAuthorSuccess(authors){
    return {type: types.LOAD_AUTHORS_SUCCESS , authors};
}
// thunk
export function loadAuthors(){
    return function(dispatch){ // wrapper function
        // async call
        return AuthorApi.getAllAuthors().then(authors=>{
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };

}