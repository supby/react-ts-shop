import { AnyAction, Reducer } from "redux";
import { ItemsFilter } from './types';
import { SetItemsFilter, SET_ITEMS_FILTER } from './actions'

type KnownAction = SetItemsFilter;
const unloadedState: ItemsFilter = { name: '' };

export const itemsFilter: Reducer<ItemsFilter> = 
    (state: ItemsFilter = unloadedState, incomingAction: AnyAction ) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case SET_ITEMS_FILTER:
            return action.filter;
        default:
            return state
    }
};