import React from 'react';
import classes from './FlightCard.module.css';
import FlightTable from './FlightTable';
const FlightCard = ({ flightConfiguration, id }) => {
    console.log(flightConfiguration);
    const { airline, arrival, duration, price } = flightConfiguration;
    return (
        <React.Fragment>
            
            <div className={classes['flight-card']}>
                <span className={classes.airline}>{airline}</span>
                <span className="arrival">{arrival}</span>
                <span className="duration">{duration}</span>
                <span className="price">{price}</span>
            </div>
        </React.Fragment>
    )
}

export default FlightCard;