import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import mockData from '../UserList/data';
import ServiceTable from "./components/ServiceTable";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const HealthDashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          md={12}
          xs={12}
        >
          <ServiceTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default HealthDashboard;
