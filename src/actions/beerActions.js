import * as types from './actionTypes';
import beerApi from '../api/mockBeerApi';

export function loadBeerSuccess(beers){
    return {type: types.LOAD_BEER_SUCCESS , beers};
}

export function loadBeers(){
    return function(dispatch){ // wrap the function in thunk
        // body of thunk
        return beerApi.getAllBeerData().then(beers=>{
            dispatch(loadBeerSuccess(beers));
        }).catch(error => {
            throw(error);
        });
    };

}