import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';

import Filters from './components/Filters';
import SLOGraph from './components/SLOGraph';
import SLOTable from './components/SLOTable';
import SLOChart from './components/SLOChart';

import { fetchSLOFilters } from '../../actions/slo';

import mockData from '../UserList/data';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
    circularProgress: {
        width: '100%',
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const SLO = ({ fetchingFilters, filtersError, fetchSLOFilters }) => {
    const classes = useStyles();
    const [users] = useState(mockData);
    useEffect(() => {
        fetchSLOFilters();
    }, [fetchSLOFilters]);

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item md={12} xs={12}>
                    {fetchingFilters ? (
                        <div className={classes.circularProgress}>
                            <CircularProgress />
                        </div>
                    ) : filtersError ? null : (
                        <React.Fragment>
                            <Filters />
                            <br />
                            <SLOChart />
                            <br />
                        </React.Fragment>
                    )}
                    <SLOTable users={users} />
                    <br />
                    <SLOGraph />
                </Grid>
            </Grid>
        </div>
    );
};

function mapStateToProps({ slo }) {
    let { fetching: fetchingFilters, error: filtersError } = slo.filters;
    return { fetchingFilters, filtersError };
}

export default connect(mapStateToProps, { fetchSLOFilters })(SLO);
