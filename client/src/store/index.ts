
import { ItemsListState } from './items/types'
import { ItemsFilter } from './search/types'
import { itemsList } from './items/reducers'
import { itemsFilter } from './search/reducers'
import { ItemDetailsState } from './itemdetails/types';
import { itemDetails } from './itemdetails/reducers';

// The top-level state object
export interface ApplicationState {
    itemsList: ItemsListState;
    itemsFilter: ItemsFilter;
    itemDetails: ItemDetailsState;
}

export const reducers = {
    itemsList,
    itemsFilter,
    itemDetails
};