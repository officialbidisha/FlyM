
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import searchclasses from './Search.module.css';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import {searchFlights}  from '../store/actions/searchFlightActions';
import { useDispatch } from 'react-redux';
const Search = () => {

    const [fromLandmark, setFromLandmark] = useState("");
    const [toDestination, setToDestination] = useState("");
    const [date, setDate] = useState("");
    
    const dispatch = useDispatch();

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,

        },
        centralised: {
            justifyContent: 'center'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        formfield: {
            padding: '10px 0px',
        },

    }));

    const classes = useStyles();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(searchFlights({to: toDestination, from: fromLandmark, date}));

    }

    const destinationChangeHandler = (e) => {
        setToDestination(e.target.value);
    }

    const landmarkChangeHandler = e => {
        setFromLandmark(e.target.value)
    }

    const dateChangeHandler = e => {
        setDate(e.target.value);
    }



    return (
        <div className={classes.root}>
            <Grid container className={classes.centralised}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <form className={classes.form} onSubmit={submitHandler}>
                            <div className={classes['formfield']}>
                                <label className={searchclasses['labels']}>From</label>
                                <input type="text" aria-label="ToDestination"
                                    aria-required="true" value={toDestination}
                                    onChange={destinationChangeHandler} required></input>
                            </div>
                            <div className={classes['formfield']}>
                                <label className={searchclasses.labels}>To</label>
                                <input type="text" aria-label="FromLandmark"
                                    value={fromLandmark}
                                    onChange={landmarkChangeHandler}

                                    aria-required="true" required></input>
                            </div>
                            <div className={classes['formfield']}>
                                <label className={searchclasses.labels}>Date</label>
                                <input type="date" aria-label="DateOfTravelling"
                                    value={date}
                                    onChange={dateChangeHandler}

                                    aria-required="true" required></input>
                            </div>
                            <Button color="primary" type="submit">Submit</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Search;