import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Divider,
    Typography,
    CircularProgress,
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import RefreshIcon from '@material-ui/icons/Refresh';
import { connect } from 'react-redux';

import { fetchSdkMSR } from '../../../actions/dashboard';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },
    chartContainer: {
        position: 'relative',
        height: '300px',
    },
    stats: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
    },
    device: {
        textAlign: 'center',
        padding: theme.spacing(1),
    },
    deviceIcon: {
        color: theme.palette.icon,
    },
    circularProgressContainer: {
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const SdkMSR = ({
    fetching,
    dataSet = [],
    error,
    pieChartData,
    fetchSdkMSR,
}) => {
    const classes = useStyles();
    const theme = useTheme();

    const data = {
        datasets: [
            {
                data: [],
                backgroundColor: [
                    theme.palette.primary.main,
                    theme.palette.error.main,
                    theme.palette.warning.main,
                ],
                borderWidth: 8,
                borderColor: theme.palette.white,
                hoverBorderColor: theme.palette.white,
            },
        ],
        labels: [],
        ...pieChartData,
    };

    const options = {
        legend: {
            display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        tooltips: {
            enabled: true,
            mode: 'index',
            intersect: false,
            borderWidth: 1,
            borderColor: theme.palette.divider,
            backgroundColor: theme.palette.white,
            titleFontColor: theme.palette.text.primary,
            bodyFontColor: theme.palette.text.secondary,
            footerFontColor: theme.palette.text.secondary,
        },
    };

    useEffect(() => {
        fetchSdkMSR();
    }, [fetchSdkMSR]);

    return (
        <Card className={clsx(classes.root)}>
            <CardHeader
                action={
                    <IconButton size="small" onClick={() => fetchSdkMSR()}>
                        <RefreshIcon />
                    </IconButton>
                }
                title="CDF SDK MSR"
            />
            <Divider />
            <CardContent>
                {fetching ? (
                    <div className={classes.circularProgressContainer}>
                        <CircularProgress></CircularProgress>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className={classes.chartContainer}>
                            <Doughnut data={data} options={options} />
                        </div>
                        <div className={classes.stats}>
                            {dataSet.map(device => (
                                <div
                                    className={classes.device}
                                    key={device.title}
                                >
                                    <span className={classes.deviceIcon}>
                                        <LaptopMacIcon />
                                    </span>
                                    <Typography variant="body1">
                                        {device.title}
                                    </Typography>
                                    <Typography
                                        style={{ color: device.color }}
                                        variant="h3"
                                    >
                                        {device.value}%
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                )}
            </CardContent>
        </Card>
    );
};

SdkMSR.propTypes = {
    className: PropTypes.string,
};

function mapStateToProps({ dashboard }) {
    return {
        fetching: dashboard.sdkMSR.fetching,
        dataSet: dashboard.sdkMSR.dataSet,
        error: dashboard.sdkMSR.error,
        pieChartData: dashboard.sdkMSR.pieChartData,
    };
}

export default connect(mapStateToProps, { fetchSdkMSR })(SdkMSR);
