import { ActionTypes } from "../action-types/action-types";
const initialState = {
  isFlightDataLoading: true,
  flights: [],
  filteredFlights: [],
};

export const searchFlightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_FLIGHTS:
      return {
        ...state,
        isFlightDataLoading: false,
        flights: [...action.payload],
      };
    case ActionTypes.FILTER_FLIGHTS:
      return {
        ...state,
        isFlightDataLoading: false,
        filteredFlights: [...action.payload],
      };
    case ActionTypes.CLEAR_FILTER_FLIGHTS:
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
