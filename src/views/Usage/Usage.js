import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
    Filters,
    Password,
    TotalUsers,
    UsageChart,
    UsagePieChart,
} from './components';
import SLOTable from './components/SLOTable';
import mockData from '../UserList/data';
import SLOGraph from './components/SLOGraph';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
}));

const Usage = () => {
    const classes = useStyles();
    const [users] = useState(mockData);

    const [filters] = useState({
        Service: ['Assets', 'Events', 'Files', 'Timeseries'],
        Application: ['OpsInt', 'Console'],
        Client: ['AkerBP'],
        SDK: ['Python', 'Scala', 'JavaScript'],
        Resource: ['Core Services', '3D'],
        Function: ['Store', 'Contextualize', 'Analyze'],
        'Batch Job': ['Jet Fire', 'Search Loader'],
        Extractor: ['Extractor 1', 'Extractor 2'],
        'Data Level': [
            'Data Integration',
            'Data Inventory',
            'Access Management',
        ],
    });

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <TotalUsers title={'TOTAL CDF USAGE'} value={'1.6 M'} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <TotalUsers title={'APPLICATION USAGE'} value={'0.6 M'} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <TotalUsers title={'SDK USAGE'} value={'0.2 M'} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <TotalUsers title={'API USAGE'} value={'0.8 M'} />
                </Grid>
                <Grid item md={12} xs={12}>
                    <Filters filters={filters} />
                </Grid>
                <Grid item md={12} xs={12}>
                    <UsageChart />
                </Grid>
                <Grid item md={12} xs={12}>
                    <UsagePieChart />
                </Grid>
            </Grid>
        </div>
    );
};

export default Usage;
