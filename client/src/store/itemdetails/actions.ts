import { ItemDetailsData, ItemReview, ItemDetailsState } from './types';
import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '..';
import { Action } from 'redux';
import { SHOW_ITEM_DETAILS } from "./constants";
import ApolloClient from "apollo-boost";
import { GET_PRODUCT_DETAILS } from './queries';

const gqlClient = new ApolloClient({
  uri: "http://localhost:4466"
});

export interface ShowItemDetailsAction {
    type: typeof SHOW_ITEM_DETAILS;
    payload: ItemDetailsState;
  }

export const actionCreators = {
    requestItemDetails: (id: number): ThunkAction<void, ApplicationState, null, Action> => async (
      dispatch,
      getState
    ) => {
      const state = getState();
  
      const queryResult = await gqlClient.query({
        query: GET_PRODUCT_DETAILS,
        variables: { id: id }
      });
      
      dispatch({
        type: SHOW_ITEM_DETAILS,
        payload: {
          data: {
            ...queryResult.data.product,
            reviews: queryResult.data.reviews as ItemReview[]
          } as ItemDetailsData,
          isLoading: false
        }
      });
    }
  };