import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { Item, ItemsListState } from "./types";
import testData from "../testData";
import { ApplicationState } from "../index";

export const SHOW_ITEM_LIST = "SHOW_ITEM_LIST";

const gqlClient = new ApolloClient({
  uri: "http://localhost:4466"
});

// actions
export interface ShowItemsListAction {
  type: typeof SHOW_ITEM_LIST;
  items: Item[];
}

// action creators
export const actionCreators = {
  requestItems: (): ThunkAction<void, ApplicationState, null, Action> => async (
    dispatch,
    getState
  ) => {

    const filter = getState().itemsFilter;
    const products = await gqlClient.query({
      query: gql`
        {
          products(where: { name_contains: "${filter.name}" }) {
            id
            name
            description
            price
            image
          }
        }
      `
    });
    dispatch({ type: SHOW_ITEM_LIST, items: products.data.products as Item[] });

    // let data = testData.itemsList as Item[];
    // const filter = getState().itemsFilter;
    // if (filter) data = data.filter(e => e.name.search(filter.name) > -1);
    // dispatch({ type: SHOW_ITEM_LIST, items: data });
  }
};
