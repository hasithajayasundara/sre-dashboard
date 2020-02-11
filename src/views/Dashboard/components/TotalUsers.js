import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import MetricCard from '../common/MetricCard';
import { fetchTotalUsers } from '../../../actions/dashboard';

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
        backgroundColor: theme.palette.success.main,
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

const TotalUsers = ({ totalUsers, fetchTotalUsers }) => {
    useEffect(() => {
        fetchTotalUsers();
    }, [fetchTotalUsers]);
    return (
        <MetricCard
            useStyles={useStyles}
            variant={totalUsers.value || ''}
            trend={totalUsers.trend || {}}
            title="TOTAL USERS"
            fetching={totalUsers.fetching}
            error={totalUsers.error}
        ></MetricCard>
    );
};

function mapStateToProps({ dashboard }) {
    return { totalUsers: dashboard.metrics.totalUsers };
}

export default connect(mapStateToProps, { fetchTotalUsers })(TotalUsers);
