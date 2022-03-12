import axios from "axios"
import { ActionTypes } from "../action-types/action-types";

export const searchFlights = (searchParams) => async (dispatch) => {

    console.log('----Search parameters----', searchParams);
    const { to, from, date } = searchParams;
    let response;
    try {
        response = await axios.post('https://fly-m.herokuapp.com/api/v1/flym/search', {
            "to": to,
            "from": from,
            "date": date
        })
    }
    catch (err) {
        console.log(err);
    }

    dispatch({ type: ActionTypes.SEARCH_FLIGHTS, payload: response.data.ResponseData })
}