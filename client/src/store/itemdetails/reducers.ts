import { AnyAction, Reducer } from "redux";
import { ItemDetails } from './types';
import { ShowItemDetailsAction } from './actions'
import { SHOW_ITEM_DETAILS } from './constants'

type KnownAction = ShowItemDetailsAction;
const unloadedState: ItemDetails = { data: {}, isLoading: true };

export const itemDetails: Reducer<ItemDetails> = 
    (state: ItemDetails = unloadedState, incomingAction: AnyAction ) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case SHOW_ITEM_DETAILS:
            return { ...action.payload };
        default:
            return state
    }
};