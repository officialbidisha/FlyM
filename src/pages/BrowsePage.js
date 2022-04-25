import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import FlightCard from "../components/FlightCard";
import Header from "../components/Header";
import FlightTable from "../components/FlightTable";
import Sidebar from "../Layout/Sidebar";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import "./BrowsePage.scss";
import {
  clearFlights,
  filterFlights,
} from "../store/actions/searchFlightActions";

const BrowsePage = () => {
  const dispatch = useDispatch();

  const [isStopsChecked, setIsStopsChecked] = useState([false, false]);

  /**
   * Theme for the grid
   * @params theme
   * @returns void 
   */
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  
  const sendStopsSelectionData = ([index1, index2]) => {
    setIsStopsChecked([index1, index2]);
  };

  const flightData = useSelector((state) => state.flights.flights);
  const filteredFlightData = useSelector(
    (state) => state.flights.filteredFlights
  );
  const isFlightDataLoading = useSelector(
    (state) => state.flights.isFlightDataLoading
  );

  useEffect(() => {
    if (isStopsChecked[0]) {
      dispatch(filterFlights({ filterParams: "Nonstop", flightData }));
    } else if (isStopsChecked[1]) {
      dispatch(filterFlights({ filterParams: "1 Stop", flightData }));
    } else {
      dispatch(clearFlights(flightData));
    }
  }, [isStopsChecked[0], isStopsChecked[1]]);

  return (
    <React.Fragment>
      <Header />
      <Box sx={{ flexGrow: 1 }} style={{ padding: "5px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={3} sm={4} className="filters">
            <Sidebar sendStopsSelectionData={sendStopsSelectionData} />
          </Grid>
          <Grid item xs={8} md={9} sm={8} className="table-grid">
            <Item>
              {isFlightDataLoading && <p>Loading</p>}
              {flightData.length > 0 && (
                <React.Fragment>
                  <FlightTable />
                  {!filteredFlightData?.length > 0
                    ? flightData.map((flight) => {
                        return (
                          <FlightCard
                            key={flight._id}
                            id={flight._id}
                            flightConfiguration={flight}
                          />
                        );
                      })
                    : filteredFlightData.map((flight) => {
                        return (
                          <FlightCard
                            key={flight._id}
                            id={flight._id}
                            flightConfiguration={flight}
                          />
                        );
                      })}
                </React.Fragment>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};
export default BrowsePage;
