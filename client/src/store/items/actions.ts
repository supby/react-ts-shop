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
        skip: (page - 1) * PAGE_SIZE,
        first: PAGE_SIZE
      }
    });

    const ratingCounts = _.reduce(
      queryResult.data.reviews,
      (res, r) => {
        res[r.product.id] = (res[r.product.id] || 0) + 1;
        return res;
      },
      {}
    );
    const ratings = _.reduce(
      queryResult.data.reviews,
      (res, r) => {
        res[r.product.id] = (res[r.product.id] || 0) + r.rating;
        return res;
      },
      {}
    );

    dispatch({
      type: SHOW_ITEM_LIST,
      payload: {
        items: (queryResult.data.products as Item[]).map(p => ({
          ...p,
          rating: ratings[p.id] / ratingCounts[p.id]
        })),
        isLoading: false,
        count: queryResult.data.productsConnection.aggregate.count
      }
    });
  }
};
