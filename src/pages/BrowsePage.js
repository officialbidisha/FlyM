import { useSelector } from "react-redux";
import React from 'react';

const BrowsePage = () => {

    const flightData = useSelector((state)=> state.flights.flights);
    const isFlightDataLoading = useSelector((state)=> state.flights.isFlightDataLoading);
    console.log(isFlightDataLoading);
    console.log(flightData.length);

    return(

        <React.Fragment>
                 {isFlightDataLoading && <p>Loading</p>}
                 {flightData.length>0 && <p>Be happy!</p>}
        </React.Fragment>

        
    )
}
export default BrowsePage;