import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Item, ItemsListState } from './types'
import testData from '../testData';

export const SHOW_ITEM_LIST = 'SHOW_ITEM_LIST';

// actions
export interface ShowItemsListAction {
    type: typeof SHOW_ITEM_LIST;
    items: Item[];
}

// action creators
export const actionCreators = {
    requestItems: (): ThunkAction<void, ItemsListState, null, Action> => 
        (dispatch, state) => {
            // fetch(`api/items`)
            //     .then(response => response.json() as Promise<Item[]>)
            //     .then(data => {
            //         dispatch({ type: SHOW_ITEM_LIST, items: data });
            //     });
            dispatch({ type: SHOW_ITEM_LIST, items: testData.itemsList as Item[] });
        }
};