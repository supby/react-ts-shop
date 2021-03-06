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
    
    const rootReducer = buildRootReducer(reducers);
    return createStoreWithMiddleware(rootReducer, initialState) as Store<ApplicationState>;
}

function buildRootReducer(allReducers: ReducersMapObject) {
    return combineReducers<ApplicationState>(Object.assign({}, allReducers));
}