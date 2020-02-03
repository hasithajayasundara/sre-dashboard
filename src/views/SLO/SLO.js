import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {Filters, Password, SLOChart} from './components';
import SLOTable from './components/SLOTable';
import mockData from '../UserList/data';
import SLOGraph from './components/SLOGraph';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const SLO = () => {
  const classes = useStyles();
  const [users] = useState(mockData);

  const [filters] = useState(
    {
      Service: ['Assets', 'Events', 'Files', 'Timeseries'],
      Application: ['OpsInt', 'Console'],
      Client: ['AkerBP'],
      SDK: ['Python', 'Scala', 'JavaScript'],
      Resource: ['Core Services', '3D'],
      Function: ['Store', 'Contextualize', 'Analyze'],
      'Batch Job': ['Jet Fire', 'Search Loader'],
      Extractor: ['Extractor 1', 'Extractor 2'],
      'Data Level': ['Data Integration', 'Data Inventory', 'Access Management']
    }
  );

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
          <Filters filters={filters}/>
          <br />
          <SLOChart />
          <br />
          <SLOTable users={users} />
          <br />
          <SLOGraph/>
        </Grid>
      </Grid>
    </div>
  );
};

export default SLO;
