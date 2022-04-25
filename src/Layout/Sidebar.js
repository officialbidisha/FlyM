import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";

import "./Sidebar.scss";

const Sidebar = (props) => {
  const [stopsChecked, setStopsChecked] = useState([false, false]);

  const handleClick = (event) => {
    setStopsChecked([event.target.checked, stopsChecked[1]]);
    props.sendStopsSelectionData([event.target.checked, stopsChecked[1]]);
  };

  const handleClick2 = (event) => {
    setStopsChecked([stopsChecked[0], event.target.checked]);
    props.sendStopsSelectionData([stopsChecked[0], event.target.checked]);
  };

  return (
    <div className="sidebar">
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
            <FormControlLabel
              control={<Checkbox />}
              label="Non Stop"
              checked={stopsChecked[0]}
              onChange={handleClick}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="One Stop"
              checked={stopsChecked[1]}
              onChange={handleClick2}
            />
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
    </div>
  );
};
export default Sidebar;
