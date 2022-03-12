import { ActionTypes } from "../action-types/action-types";
const initialState = {
     flights : []
}

export const searchFlightsReducer = (state = initialState,action ) => {
    switch(action.type){
        case ActionTypes.SEARCH_FLIGHTS:
            return {
                ...state,
                flights: action.payload
            }
        default:{
            return state;
        }
    }
}