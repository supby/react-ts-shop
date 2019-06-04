import { ItemDetails } from "./types";
import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '..';
import { Action } from 'redux';
import { SHOW_ITEM_DETAILS } from "./constants";

export interface ShowItemDetailsAction {
    type: typeof SHOW_ITEM_DETAILS;
    payload: ItemDetails;
  }

export const actionCreators = {
    requestItemDetails: (id: number): ThunkAction<void, ApplicationState, null, Action> => async (
      dispatch,
      getState
    ) => {
      const state = getState();
  
      
  
      dispatch({
        type: SHOW_ITEM_DETAILS,
        payload: {
          data: {} as ItemDetails,
          isLoading: false
        }
      });
    }
  };