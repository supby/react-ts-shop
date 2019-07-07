import { AnyAction, Reducer } from "redux";
import { ItemDetailsState, ItemDetailsData } from './types';
import { ShowItemDetailsAction } from './actions'
import { SHOW_ITEM_DETAILS } from './constants'

type KnownAction = ShowItemDetailsAction;
const unloadedState: ItemDetailsState = { data: {} as ItemDetailsData, isLoading: true };

export const itemDetails: Reducer<ItemDetailsState> = 
    (state: ItemDetailsState = unloadedState, incomingAction: AnyAction ) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case SHOW_ITEM_DETAILS:
            return { ...action.payload };
        default:
            return state
    }
};