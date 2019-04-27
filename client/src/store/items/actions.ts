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
    requestItems: (filter?:string): ThunkAction<void, ItemsListState, null, Action> => 
        (dispatch, state) => {
            // fetch(`api/items`)
            //     .then(response => response.json() as Promise<Item[]>)
            //     .then(data => {
            //         dispatch({ type: SHOW_ITEM_LIST, items: data });
            //     });

            let data = testData.itemsList as Item[];
            if(filter) data = data.filter(e => e.title.search(filter) > -1)

            dispatch({ type: SHOW_ITEM_LIST, items: data });
        }
};