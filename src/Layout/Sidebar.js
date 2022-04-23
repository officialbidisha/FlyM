import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';

import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <p>Stops</p>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Non Stop" />
                        <FormControlLabel control={<Checkbox />} label="One Stop" />
                    </FormGroup>

                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <p>Airline</p>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Air India" />
                        <FormControlLabel control={<Checkbox />} label="Go First" />
                        <FormControlLabel control={<Checkbox />} label="Indigo" />
                        <FormControlLabel control={<Checkbox />} label="Spice Jet" />
                        <FormControlLabel control={<Checkbox />} label="Vistara" />
                    </FormGroup>

                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <p>Trip Duration</p>
                </AccordionSummary>
                <AccordionDetails>

                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <p>Price</p>
                </AccordionSummary>
                <AccordionDetails>

                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                    />
                </AccordionDetails>
            </Accordion>
        </div>)
}
export default Sidebar;