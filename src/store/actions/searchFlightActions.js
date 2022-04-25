import axios from "axios";
import { useSelector } from "react-redux";
import { ActionTypes } from "../action-types/action-types";

export const searchFlights = (searchParams) => async (dispatch) => {
  const { to, from, date } = searchParams;
  let response;
  try {
    response = await axios.post(
      "https://fly-m.herokuapp.com/api/v1/flym/search",
      {
        to: to,
        from: from,
        date: date,
      }
    );
  } catch (err) {
    console.log(err);
  }

  dispatch({
    type: ActionTypes.SEARCH_FLIGHTS,
    payload: response.data.ResponseData,
  });
};

export const filterFlights =
  ({ filterParams, flightData }) =>
  async (dispatch) => {
    let response;

    switch (filterParams) {
      case "Nonstop": {
        response = flightData.filter((x) => x.type === filterParams);
        dispatch({ type: ActionTypes.FILTER_FLIGHTS, payload: response });
        break;
      }
      case "1 Stop": {
        response = flightData.filter((x) => x.type === filterParams);
        dispatch({ type: ActionTypes.FILTER_FLIGHTS, payload: response });
        break;
      }
    }
  };

export const clearFlights = (flightData) => async (dispatch) => {
  dispatch({ type: ActionTypes.CLEAR_FILTER_FLIGHTS, payload: flightData });
};
