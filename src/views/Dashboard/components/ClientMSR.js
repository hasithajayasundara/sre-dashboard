import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Button,
    CircularProgress,
    Select,
    MenuItem,
} from '@material-ui/core';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { connect } from 'react-redux';
import palette from 'theme/palette';

import {
    fetchClientMSR,
    changeClientMSRDays,
} from '../../../actions/dashboard';
import moment from 'moment';

const useStyles = makeStyles(() => ({
    root: {},
    chartContainer: {
        height: 400,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actions: {
        justifyContent: 'flex-end',
    },
}));

// Specify MSR duration filter here
const clientMSRDurations = [
    { value: 7, description: 'Last 7 days' },
    { value: 30, description: 'Last 30 days' },
    { value: 90, description: 'Last 3 months' },
];

const ClientMSR = ({
    dataSet,
    fetching,
    filter,
    fetchClientMSR,
    changeClientMSRDays,
}) => {
    const classes = useStyles();
    useEffect(() => {
        fetchClientMSR(filter);
    }, [fetchClientMSR, filter]);
    let { days } = filter;
    return (
        <Card className={clsx(classes.root)}>
            <CardHeader
                action={
                    <Select
                        id="demo-simple-select"
                        value={days}
                        onChange={event =>
                            changeClientMSRDays(event.target.value)
                        }
                    >
                        {clientMSRDurations.map((item, i) => (
                            <MenuItem
                                key={`client-msr-duration-${i}`}
                                value={item.value}
                            >
                                {item.description}
                            </MenuItem>
                        ))}
                    </Select>
                }
                title="CDF Client MSR"
            />
            <Divider />
            <CardContent>
                <div className={classes.chartContainer}>
                    {fetching ? (
                        <CircularProgress />
                    ) : (
                        <Bar data={dataSet || {}} options={options} />
                    )}
                </div>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
                <Button color="primary" size="small" variant="text">
                    Overview <ArrowRightIcon />
                </Button>
            </CardActions>
        </Card>
    );
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    legend: { display: true },
    cornerRadius: 20,
    tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        borderWidth: 1,
        borderColor: palette.divider,
        backgroundColor: palette.white,
        titleFontColor: palette.text.primary,
        bodyFontColor: palette.text.secondary,
        footerFontColor: palette.text.secondary,
    },
    layout: { padding: 0 },
    scales: {
        xAxes: [
            {
                barThickness: 6,
                maxBarThickness: 10,
                barPercentage: 0.5,
                categoryPercentage: 0.5,
                ticks: {
                    fontColor: palette.text.secondary,
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
            },
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: palette.text.secondary,
                    beginAtZero: true,
                    min: 0,
                },
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: palette.divider,
                    drawBorder: false,
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                    zeroLineColor: palette.divider,
                },
            },
        ],
    },
};

ClientMSR.propTypes = {
    className: PropTypes.string,
};

function mapStateToProps({ dashboard }) {
    return {
        fetching: dashboard.clientMSR.fetching,
        error: dashboard.clientMSR.fetching,
        filter: dashboard.clientMSR.filter,
        dataSet: dashboard.clientMSR.dataSet,
    };
}

export default connect(mapStateToProps, {
    fetchClientMSR,
    changeClientMSRDays,
})(ClientMSR);
