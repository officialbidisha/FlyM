// airline(pin):"Indigo"
// from(pin):"Kolkata"
// to(pin):"Bangalore"
// date(pin):"01/04/2022"
// departure(pin):"04:30"
// arrival(pin):"06:55"
// price(pin):"5754"
// duration(pin):"2h 30m"
// type(pin):"Nonstop"
// totalSeats(pin):"300"
// availableSeats(pin):"300"

import React from "react";
import classes from './FlightTable.module.css';
const FlightTable = () => {
    return <React.Fragment>
        <div className={classes['table-header']}>
            <span className={classes.airline}>Airline</span>
            <span className={classes.arrival}>Arrival</span>
            <span className={classes.duration}>Departure</span>
            <span className={classes.price}>Price</span>
        </div>
    </React.Fragment>
}

export default FlightTable;