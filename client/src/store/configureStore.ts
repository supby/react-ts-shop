import { 
    createStore, 
    applyMiddleware, 
    compose, 
    combineReducers, 
    Store, 
    ReducersMapObject } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState, reducers } from './';

export default function configureStore(initialState?: ApplicationState) {
    const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);
    
    const allReducers = buildRootReducer(reducers);
    return createStoreWithMiddleware(allReducers, initialState) as Store<ApplicationState>;

    // return createStore(
    //     combineReducers(reducers),
    //     applyMiddleware(thunk)
    // )
}

function buildRootReducer(allReducers: ReducersMapObject) {
    return combineReducers<ApplicationState>(Object.assign({}, allReducers));
}