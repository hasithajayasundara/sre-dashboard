import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import MetricCard from '../common/MetricCard';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import { connect } from 'react-redux';

import { fetchLatency } from '../../../actions/dashboard';

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
        color: 'textSecondry',
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
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
}));

const Latency = ({ latency, fetchLatency }) => {
    useEffect(() => {
        fetchLatency();
    }, [fetchLatency]);
    return (
        <MetricCard
            useStyles={useStyles}
            variant={latency.value || ''}
            trend={latency.trend || {}}
            title="LATENCY"
            fetching={latency.fetching}
            error={latency.error}
        >
            <InsertChartIcon />
        </MetricCard>
    );
};

function mapStateToProps({ dashboard }) {
    return { latency: dashboard.metrics.latency };
}

export default connect(mapStateToProps, { fetchLatency })(Latency);
