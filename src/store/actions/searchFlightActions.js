import axios from "axios"
import { ActionTypes } from "../action-types/action-types";

export const searchFlights = (searchParams) => async(dispatch) =>{
    debugger;
    console.log('hhhhh', searchParams);
    const {to, from, date} = searchParams;
    const response = await axios({
        method: 'post',
        url: 'https://fly-m.herokuapp.com/api/v1/flym/search',
        data: {
             to,
             from, 
             date
        }
    })
    console.log(response);
    dispatch({type: ActionTypes.SEARCH_FLIGHTS, payload: response.data.ResponseData})
}