import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import { fetchErrorRate } from '../../../actions/dashboard';
import MetricCard from '../common/MetricCard';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },
    content: {
        alignItems: 'center',
        display: 'flex',
    },
    title: {
        fontWeight: 700,
    },
    avatar: {
        backgroundColor: theme.palette.error.main,
        height: 56,
        width: 56,
    },
    icon: {
        height: 32,
        width: 32,
    },
    difference: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    differenceIconSuccess: {
        color: theme.palette.success.main,
    },
    differenceIconError: {
        color: theme.palette.error.main,
    },
    differenceValueSuccess: {
        color: theme.palette.success.main,
        marginRight: theme.spacing(1),
    },
    differenceValueError: {
        color: theme.palette.error.main,
        marginRight: theme.spacing(1),
    },
    error: {
        color: theme.palette.error.main,
    },
}));

const ErrorRate = ({ errorRate, fetchErrorRate }) => {
    useEffect(() => {
        fetchErrorRate();
    }, [fetchErrorRate]);
    return (
        <MetricCard
            useStyles={useStyles}
            variant={errorRate.value || ''}
            trend={errorRate.trend || {}}
            title="ERROR RATE"
            error={errorRate.error}
            fetching={errorRate.fetching}
        ></MetricCard>
    );
};

function mapStateToProps({ dashboard }) {
    return { errorRate: dashboard.metrics.errorRate };
}

export default connect(mapStateToProps, { fetchErrorRate })(ErrorRate);
