import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Collapse from '@material-ui/core/Collapse';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  RadioGroup,
  Radio
} from '@material-ui/core';
import { DatePicker } from './../';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Filters = props => {
  const { className, filters, ...rest } = props;

  const [showFilters, setShowFilters] = useState(false);
  const [selectedSLOType, setSelectedSLOType] = useState(Object.keys(filters)[0]);
  const [selectedValues, setSelectedValues] = useState(filters[selectedSLOType]);
  const [relativeTimeSelected, setRelativeTimeSelected] = useState(false);

  const classes = useStyles();

  /***
   * This function handles the process of hiding and showing filters
   */
  const onHideFiltersClick = () => {
    // change the condition to hide or show the filters card
    setShowFilters(prev => !prev);
  };

  /***
   * Capture the changing radio button events
   * @param e The event triggered by the changing Radio Button
   */
  const onRadioButtonChange = e => {
    const { value } = e.target;
    // set the current selected MSR Type
    setSelectedSLOType(value);
    // set the values to be displayed for each MSR type
    setSelectedValues(filters[value]);
  };

  /***
   * Capture the changing event of the checkbox button
   * @param e
   */
  const onCheckBoxChange = e => {
    const { value } = e.target;
    console.log(e);
  };

  /***
   * When user switches between absolute and relative times
   */
  const onTimeTypeClicked = () => {
    setRelativeTimeSelected(prev => !prev);
  };

  /***
   * This will process the filters and display the MSR data
   */
  const onApplyFiltersClick = () => {

  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <Collapse in={showFilters}>
          <CardContent>
            <Grid
              container
              spacing={6}
              wrap="wrap"
            >
              <Grid
                className={classes.item}
                item
                md={4}
                sm={6}
                xs={12}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                >
                  SLO Type
                </Typography>
                <RadioGroup
                  aria-label="slo-type"
                  name="slo-type"
                >
                  {Object.keys(filters).map((filter, index) => <FormControlLabel
                    checked={filter === selectedSLOType}
                    control={
                      <Radio
                        color="primary"
                        key={index}
                      />
                    }
                    key={index}
                    label={filter}
                    onChange={onRadioButtonChange}
                    value={filter}
                  />)}
                </RadioGroup>
              </Grid>
              <Grid
                className={classes.item}
                item
                md={4}
                sm={6}
                xs={12}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                >
                  Services
                </Typography>
                {selectedValues.map((value, index) => <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      onChange={onCheckBoxChange}
                      defaultChecked //
                    />
                  }
                  key={index}
                  label={value}
                />)}
              </Grid>
              <Grid
                className={classes.item}
                item
                md={4}
                sm={6}
                xs={12}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                >
                  Time Range
                </Typography>
                <br />
                {relativeTimeSelected && <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-native-simple">Select Relative Time</InputLabel>
                  <Select
                    native
                    value={'state.age'}
                    onChange={onCheckBoxChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple',
                    }}
                  >
                    <option value={88}>Last 5 mins</option>
                    <option value={88}>Last 15 mins</option>
                    <option value={88}>Last 30 mins</option>
                    <option value={88}>Last 1 hour</option>
                    <option value={88}>Last 6 hour</option>
                    <option value={88}>Last 12 hour</option>
                    <option value={88}>Last 1 day</option>
                    <option value={88}>Last 1 week</option>
                    <option value={88}>Last 1 month</option>
                    <option value={88}>Last 3 months</option>
                    <option value={88}>Last 6 months</option>
                    <option value={88}>Last 1 year</option>
                  </Select>
                </FormControl>}
                {!relativeTimeSelected && <DatePicker />}
                <br />
                <Button
                  color="primary"
                  onClick={onTimeTypeClicked}
                  variant="outlined"
                >
                  { relativeTimeSelected ? 'Switch to Absolute Time': 'Switch to Relative Time'}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            onClick={onApplyFiltersClick}
            variant="outlined"
          >
            Apply Filters
          </Button>
          <Button
            color="secondary"
            onClick={onHideFiltersClick}
            variant="outlined"
          >
            { showFilters ? 'Hide Filters' : 'Show Filters' }
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Filters.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.object.isRequired
};

export default Filters;
