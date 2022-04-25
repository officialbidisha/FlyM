import { InitialStateType } from ".";
import * as actionTypes from "../action-types/action-types";
const initialState = {
  isFlightDataLoading: true,
  flights: [],
  filteredFlights: [],
};

export const searchFlightsReducer = (state = initialState, action) : InitialStateType => {
  switch (action.type) {
    case actionTypes.SEARCH_FLIGHTS:
      return {
        ...state,
        isFlightDataLoading: false,
        flights: [...action.payload],
      };
    case actionTypes.FILTER_FLIGHTS:
      return {
        ...state,
        isFlightDataLoading: false,
        filteredFlights: [...action.payload],
      };
    case actionTypes.CLEAR_FILTER_FLIGHTS:
      return {
        ...state,
        isFlightDataLoading: false,
        filteredFlights: [...action.payload],
      };
    default: {
      return state;
    }
  }
};
