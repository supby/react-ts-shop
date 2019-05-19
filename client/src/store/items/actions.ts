import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import ApolloClient from "apollo-boost";
import { Item } from "./types";
import { ApplicationState } from "../index";
import { SHOW_ITEM_LIST } from "./constants";
import { GET_PRODUCTS_QUERY } from "./queries";
import _ from "lodash";

const gqlClient = new ApolloClient({
  uri: "http://localhost:4466"
});

// actions
export interface ShowItemsListAction {
  type: typeof SHOW_ITEM_LIST;
  items: Item[];
  isLoading: boolean;
  page: number;
}

// action creators
export const actionCreators = {
  requestItems: (): ThunkAction<void, ApplicationState, null, Action> => async (
    dispatch,
    getState
  ) => {
    const state = getState();
    dispatch({
      type: SHOW_ITEM_LIST,
      items: state.itemsList.items,
      isLoading: true
    });
    const queryResult = await gqlClient.query({
      query: GET_PRODUCTS_QUERY,
      variables: { filter: state.itemsFilter.name }
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
      items: queryResult.data.products as Item[],
      isLoading: false
    });
  }
};
