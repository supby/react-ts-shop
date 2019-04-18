import { AnyAction, Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// types
export const SHOW_ITEM_LIST = 'SHOW_ITEM_LIST';

export interface ItemsListState {
    isLoading: boolean;
    items: Item[];
}

export interface Item {
    id: number;
    title: string;
    description: string;
}

// actions
interface ShowItemsListAction {
    type: typeof SHOW_ITEM_LIST;
    items: Item[];
}

type KnownAction = ShowItemsListAction;

// action creators
export const actionCreators = {
    requestEmployees: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        fetch(`api/items`)
            .then(response => response.json() as Promise<Item[]>)
            .then(data => {
                dispatch({ type: SHOW_ITEM_LIST, items: data });
            });
    }
};

// reducer
const unloadedState: ItemsListState = { items: [], isLoading: false };

export const itemsReducer: Reducer<ItemsListState> = 
    (state: ItemsListState | undefined, incomingAction: AnyAction ) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case SHOW_ITEM_LIST:
            return {
                items: action.items,
                isLoading: false
            };
    }

    return state || unloadedState;
};