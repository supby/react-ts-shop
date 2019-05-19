import { AnyAction, Reducer } from "redux";
import { ItemsListState } from './types';
import { ShowItemsListAction } from './actions'
import { SHOW_ITEM_LIST } from './constants'

type KnownAction = ShowItemsListAction;
const unloadedState: ItemsListState = { items: [], isLoading: true, page: 0 };

export const itemsList: Reducer<ItemsListState> = 
    (state: ItemsListState = unloadedState, incomingAction: AnyAction ) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case SHOW_ITEM_LIST:
            return {
                items: action.items,
                isLoading: action.isLoading,
                page: action.page
            };
        default:
            return state
    }
};