import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'; // for async calls
export default function configureStore(initialState){ // application entry point
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk ,reduxImmutableStateInvariant())
    );

}