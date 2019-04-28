import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ItemsFilter } from './types'
import { actionCreators } from '../items/actions';
import { ApplicationState } from "..";

export const SET_ITEMS_FILTER = 'SET_ITEMS_FILTER'

export interface SetItemsFilter {
    type: typeof SET_ITEMS_FILTER;
    filter: ItemsFilter;
}

//action creators
export const filterActionCreators = {
    setItemsFilter: (filter?:ItemsFilter): ThunkAction<void, ApplicationState, null, Action> => 
        (dispatch, state) => {
            dispatch({ type: SET_ITEMS_FILTER, filter: filter });
        },
    applyItemsFilter: actionCreators.requestItems
};

