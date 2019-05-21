import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import ApolloClient from "apollo-boost";
import { Item, ItemsListState } from "./types";
import { ApplicationState } from "../index";
import { SHOW_ITEM_LIST, PAGE_SIZE } from "./constants";
import { GET_PRODUCTS_QUERY } from "./queries";
import _ from "lodash";

const gqlClient = new ApolloClient({
  uri: "http://localhost:4466"
});

// actions
export interface ShowItemsListAction {
  type: typeof SHOW_ITEM_LIST;
  payload: ItemsListState;
}

// action creators
export const actionCreators = {
  requestItems: (
    page: number = 1
  ): ThunkAction<void, ApplicationState, null, Action> => async (
    dispatch,
    getState
  ) => {
    const state = getState();

    const queryResult = await gqlClient.query({
      query: GET_PRODUCTS_QUERY,
      variables: {
        filter: state.itemsFilter.name,
        skip: (page-1) * PAGE_SIZE,
        first: PAGE_SIZE
      }
    });

    const reviews = queryResult.data.reviews;

    _.groupBy(reviews, v => v.product.id);

    // const list = [
    //   { product: { id: 17 }, rev: "ddd" },
    //   { product: { id: 17 }, rev: "tttt" },
    //   { product: { id: 20 }, rev: "bbbb" }
    // ];

    //console.log(_.groupBy(list, x => x.product.id))

    dispatch({
      type: SHOW_ITEM_LIST,
      payload: {
        items: queryResult.data.products as Item[],
        isLoading: false,
        count: queryResult.data.productsConnection.aggregate.count
      }
    });
  }
};
