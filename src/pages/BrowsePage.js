import { useSelector } from "react-redux";
import React from "react";
import FlightCard from "../components/FlightCard";
import Header from "../components/Header";
import FlightTable from "../components/FlightTable";
import Sidebar from "../Layout/Sidebar";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';

import  './BrowsePage.scss';


const BrowsePage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const flightData = useSelector((state) => state.flights.flights);
  const isFlightDataLoading = useSelector(
    (state) => state.flights.isFlightDataLoading
  );

  const onNonStopSelection = () => {
     
  }

  return (
    <React.Fragment> 
      <Header />
      <Box sx={{ flexGrow: 1 }} style={{padding: '5px'}}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={3} sm={4} className='filters'>
          <Sidebar onNonStopSelection = {onNonStopSelection}/>
        </Grid>
        <Grid item xs={8} md={9} sm={8} className='table-grid'>
          <Item>
            {isFlightDataLoading && <p>Loading</p>}
            {flightData.length > 0 && (
              <React.Fragment>
                <FlightTable />
                {flightData.map((flight) => {
                  return (
                    <FlightCard  key={flight._id} id={flight._id} flightConfiguration={flight} />
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
