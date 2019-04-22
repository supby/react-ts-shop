
import { ItemsListState } from './items/types'
import { itemsReducer } from './items/reducers'

// The top-level state object
export interface ApplicationState {
    itemList: ItemsListState;
}

export const reducers = {
    items: itemsReducer
};