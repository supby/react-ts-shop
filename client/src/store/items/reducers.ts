import { AnyAction, Reducer } from "redux";
import { ItemsListState } from './types';
import { ShowItemsListAction, SHOW_ITEM_LIST } from './actions'

type KnownAction = ShowItemsListAction;
const unloadedState: ItemsListState = { items: [], isLoading: false };

export const itemsList: Reducer<ItemsListState> = 
    (state: ItemsListState = unloadedState, incomingAction: AnyAction ) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case SHOW_ITEM_LIST:
            return {
                items: action.items,
                isLoading: false
            };
        default:
            return state
    }
};