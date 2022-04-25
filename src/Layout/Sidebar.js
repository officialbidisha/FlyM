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
  const [airlineChecked, setAirlineChecked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (event) => {
    setStopsChecked([event.target.checked, stopsChecked[1]]);
    props.sendStopsSelectionData([event.target.checked, stopsChecked[1]]);
  };

  const handleClick2 = (event) => {
    setStopsChecked([stopsChecked[0], event.target.checked]);
    props.sendStopsSelectionData([stopsChecked[0], event.target.checked]);
  };

  const checkAirIndia = (event) => {
    setAirlineChecked(
      [event.target.checked,
      airlineChecked[1],
      airlineChecked[2],
      airlineChecked[3],
      airlineChecked[4]]
    );
    props.sendAirlineSelectionData(
     [ event.target.checked,
      airlineChecked[1],
      airlineChecked[2],
      airlineChecked[3],
      airlineChecked[4]]
    );
  };

  const checkGoFirst = (event) => {
    setAirlineChecked(
      [airlineChecked[0],
      event.target.checked,
      airlineChecked[2],
      airlineChecked[3],
      airlineChecked[4]]
    );
    props.sendAirlineSelectionData(
     [ airlineChecked[0],
      event.target.checked,
      airlineChecked[2],
      airlineChecked[3],
      airlineChecked[4]]
    );
  };

  const checkIndigo = (event) => {
    setAirlineChecked(
     [ airlineChecked[0],
      airlineChecked[1],
      event.target.checked,
      airlineChecked[3],
      airlineChecked[4]]
    );
    props.sendAirlineSelectionData(
      [airlineChecked[0],
      airlineChecked[1],
      event.target.checked,
      airlineChecked[3],
      airlineChecked[4]]
    );
  };

  const checkSpiceJet = (event) => {
    setAirlineChecked(
      [airlineChecked[0],
      airlineChecked[1],
      airlineChecked[2],
      event.target.checked,
      airlineChecked[4]]
    );
    props.sendAirlineSelectionData(
      [airlineChecked[0],
      airlineChecked[1],
      airlineChecked[2],
      event.target.checked,
      airlineChecked[4]]
    );
  };

  const checkVistara = (event) => {
    setAirlineChecked(
     [ airlineChecked[0],
      airlineChecked[1],
      airlineChecked[2],
      airlineChecked[3],
      event.target.checked]
    );
    props.sendAirlineSelectionData(
     [ airlineChecked[0],
      airlineChecked[1],
      airlineChecked[2],
      airlineChecked[3],
      event.target.checked]
    );
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
            <FormControlLabel
              control={<Checkbox />}
              label="Air Asia"
              checked={airlineChecked[0]}
              onChange={checkAirIndia}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Go First"
              checked={airlineChecked[1]}
              onChange={checkGoFirst}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Indigo"
              checked={airlineChecked[2]}
              onChange={checkIndigo}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Spice Jet"
              checked={airlineChecked[3]}
              onChange={checkSpiceJet}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Vistara"
              checked={airlineChecked[4]}
              onChange={checkVistara}
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
