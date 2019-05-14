import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import ApolloClient from "apollo-boost";
import { Item } from "./types";
import { ApplicationState } from "../index";
import { SHOW_ITEM_LIST } from './constants'
import { GET_PRODUCTS_QUERY } from './queries'

const gqlClient = new ApolloClient({
  uri: "http://localhost:4466"
});

// actions
export interface ShowItemsListAction {
  type: typeof SHOW_ITEM_LIST;
  items: Item[];
  isLoading: boolean;
}

// action creators
export const actionCreators = {
  requestItems: (): ThunkAction<void, ApplicationState, null, Action> => async (
    dispatch,
    getState
  ) => {
    const state = getState();
    dispatch({ type: SHOW_ITEM_LIST, items: state.itemsList.items, isLoading: true });
    const products = await gqlClient.query({
      query: GET_PRODUCTS_QUERY,
      variables: { filter: state.itemsFilter.name }
    });
    dispatch({ type: SHOW_ITEM_LIST, items: products.data.products as Item[], isLoading: false });
  }
};
