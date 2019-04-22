
import { ItemsListState } from './items/types'
import { itemsList } from './items/reducers'

// The top-level state object
export interface ApplicationState {
    itemsList: ItemsListState;
}

export const reducers = {
    itemsList
};