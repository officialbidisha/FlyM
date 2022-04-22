import { useSelector } from "react-redux";
import React from 'react';
import FlightCard from "../components/FlightCard";
import Header from "../components/Header";
import FlightTable from "../components/FlightTable";

const BrowsePage = () => {

    const flightData = useSelector((state) => state.flights.flights);
    const isFlightDataLoading = useSelector((state) => state.flights.isFlightDataLoading);

    return (

        <React.Fragment>
            <Header />
            {isFlightDataLoading && <p>Loading</p>}
            {flightData.length > 0 &&
                (<React.Fragment>
                    <FlightTable />
                    {flightData.map((flight) => {
                       return <FlightCard id={flight._id} flightConfiguration={flight} />
                    }
                    )}

                </React.Fragment>)
            }
        </React.Fragment>


    )
}
export default BrowsePage;