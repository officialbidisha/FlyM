import { ActionTypes } from "../action-types/action-types";
const initialState = {
     isFlightDataLoading: true, 
     flights : []
}

export const searchFlightsReducer = (state = initialState,action ) => {
    
    switch(action.type){
    
        case ActionTypes.SEARCH_FLIGHTS:
            return {
                ...state,
                isFlightDataLoading: false,
                flights: [...action.payload]
            }
        default:{
            return state;
        }
    }
}