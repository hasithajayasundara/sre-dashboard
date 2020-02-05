import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import mockData from '../UserList/data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Support = () => {
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Support;
