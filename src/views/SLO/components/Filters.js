import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Collapse from '@material-ui/core/Collapse';
import {
    Card,
    CardContent,
    CardActions,
    Grid,
    Divider,
    FormControlLabel,
    Typography,
    Button,
    RadioGroup,
    Radio,
    Checkbox,
} from '@material-ui/core';
import DatePicker from './DatePicker';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';

import {
    setSLOType,
    setSLOServiceType,
    setSLOTimeFormat,
    setSLORelativeTime,
    fetchSLOGraphData,
} from '../../../actions/slo';

const useStyles = makeStyles(() => ({
    root: {},
    item: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const Filters = ({
    filters,
    sloTypes,
    sloServices,
    relativeTimeSelected,
    relativeTimeOptions,
    relativeTimeValue,
    setSLOType,
    setSLOServiceType,
    setSLOTimeFormat,
    setSLORelativeTime,
    fetchSLOGraphData,
}) => {
    const [showFilters, setShowFilters] = useState(true);

    const classes = useStyles();

    /***
     * This function handles the process of hiding and showing filters
     */
    const onHideFiltersClick = () => {
        // change the condition to hide or show the filters card
        setShowFilters(prev => !prev);
    };

    /***
     * Capture the changing event of the checkbox button
     * @param e
     */
    const onCheckBoxChange = e => {
        const { value } = e.target;
        console.log(e);
    };

    return (
        <Card className={clsx(classes.root)}>
            <form>
                <Collapse in={showFilters}>
                    <CardContent>
                        <Grid container spacing={6} wrap="wrap">
                            <Grid
                                className={classes.item}
                                item
                                md={4}
                                sm={6}
                                xs={12}
                            >
                                <Typography gutterBottom variant="h6">
                                    SLO Type
                                </Typography>
                                <RadioGroup
                                    aria-label="slo-type"
                                    name="slo-type"
                                >
                                    {sloTypes.map((type, index) => (
                                        <FormControlLabel
                                            checked={type.checked}
                                            control={
                                                <Radio
                                                    color="primary"
                                                    key={type.id}
                                                />
                                            }
                                            key={type.id}
                                            label={type.name}
                                            onChange={() =>
                                                setSLOType({
                                                    id: type.id,
                                                    index,
                                                })
                                            }
                                            value={type.id}
                                        />
                                    ))}
                                </RadioGroup>
                            </Grid>
                            <Grid
                                className={classes.item}
                                item
                                md={4}
                                sm={6}
                                xs={12}
                            >
                                <Typography gutterBottom variant="h6">
                                    Services
                                </Typography>
                                {sloServices.map((service, index) => (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                checked={service.checked}
                                                onChange={() =>
                                                    setSLOServiceType({
                                                        id: service.id,
                                                        index,
                                                    })
                                                }
                                            />
                                        }
                                        key={service.id}
                                        label={service.name}
                                    />
                                ))}
                            </Grid>
                            <Grid
                                className={classes.item}
                                item
                                md={4}
                                sm={6}
                                xs={12}
                            >
                                <Typography gutterBottom variant="h6">
                                    Time Range
                                </Typography>
                                <br />
                                {relativeTimeSelected && (
                                    <FormControl
                                        className={classes.formControl}
                                    >
                                        <InputLabel htmlFor="age-native-simple">
                                            Select Relative Time
                                        </InputLabel>
                                        <Select
                                            native
                                            value={relativeTimeValue}
                                            onChange={event =>
                                                setSLORelativeTime(
                                                    event.target.value
                                                )
                                            }
                                        >
                                            {relativeTimeOptions.map(option => (
                                                <option
                                                    key={`relative-time-${option.value}`}
                                                    value={option.value}
                                                >
                                                    {option.name}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                                {!relativeTimeSelected && <DatePicker />}
                                <br />
                                <Button
                                    color="primary"
                                    onClick={setSLOTimeFormat}
                                    variant="outlined"
                                >
                                    {relativeTimeSelected
                                        ? 'Switch to Absolute Time'
                                        : 'Switch to Relative Time'}
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Collapse>
                <Divider />
                <CardActions>
                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={() => fetchSLOGraphData(filters)}
                    >
                        Apply Filters
                    </Button>
                    <Button
                        color="secondary"
                        onClick={onHideFiltersClick}
                        variant="outlined"
                    >
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

// Filters.propTypes = {
//   className: PropTypes.string,
//   filters: PropTypes.Array.isRequired
// };

function mapStateToProps({ slo }) {
    let { sloTypes, sloServices, timeRange } = slo.filters;
    return {
        filters: slo.sloGraph.filter,
        sloTypes,
        sloServices,
        relativeTimeSelected: timeRange.relativeTimeSelected,
        relativeTimeOptions: timeRange.relativeTimeOptions,
        relativeTimeValue: timeRange.relativeTimeValue,
    };
}

export default connect(mapStateToProps, {
    setSLOType,
    setSLOServiceType,
    setSLOTimeFormat,
    setSLORelativeTime,
    fetchSLOGraphData,
})(Filters);
