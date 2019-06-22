
import { ItemsListState } from './items/types'
import { ItemsFilter } from './search/types'
import { itemsList } from './items/reducers'
import { itemsFilter } from './search/reducers'
import { ItemDetails } from './itemdetails/types';

// The top-level state object
export interface ApplicationState {
    itemsList: ItemsListState;
    itemsFilter: ItemsFilter;
    itemDetails: ItemDetails;
}

export const reducers = {
    itemsList,
    itemsFilter
};