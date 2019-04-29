import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Item, ItemsListState } from './types'
import testData from '../testData';
import { ApplicationState } from '../index';

export const SHOW_ITEM_LIST = 'SHOW_ITEM_LIST';

// actions
export interface ShowItemsListAction {
    type: typeof SHOW_ITEM_LIST;
    items: Item[];
}

// action creators
export const actionCreators = {
    requestItems: (): ThunkAction<void, ApplicationState, null, Action> => 
        (dispatch, getState) => {
            // fetch(`api/items`)
            //     .then(response => response.json() as Promise<Item[]>)
            //     .then(data => {
            //         dispatch({ type: SHOW_ITEM_LIST, items: data });
            //     });

            let data = testData.itemsList as Item[];
            const filter = getState().itemsFilter;
            if(filter) data = data.filter(e => e.title.search(filter.name) > -1)
            
            dispatch({ type: SHOW_ITEM_LIST, items: data });
        }
};