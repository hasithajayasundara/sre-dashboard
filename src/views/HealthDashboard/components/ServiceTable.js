import 'date-fns';

import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { getComponentStatus } from '../../../services/statusService';
import ServiceHealthBar from './ServiceHealthBar';
// import { getFullDateFromTimestamp } from '../../../utils/dateTimeUtil';
import * as PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
  root: {
    width: '100%',
    marginTop: 3,
    overflowX: 'auto',
  },
  grid: {},
  selectEnv: {
    padding: '12px'
  },
  table: {
    minWidth: 650,
  },
  loadingBox: {
    height: '65px',
  },
  loading: {
    margin: '20px auto',
    display: 'block',
  },
});

class ServiceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: {
        assets: {
          componentStatus: {
            component: {
              componentName: 'asset',
              environment: 'QA',
              product: 'Healthy',
              dependentServices: {
                'asset sub 1': 'UP',
                'asset sub 2': 'UP',
                'asset sub 3': 'DOWN',
                'asset sub 4': 'UP',
              }


            },
            healthStatus: {
              checkedTime: 12333333,
              status: 'UP'
            },
            environment: 'QA',
            statusHistory: {}

          }
        },
        events: {
          componentStatus: {
            component: {
              componentName: 'event',
              environment: 'QA',
              product: 'Healthy',
              dependentServices: []

            },
            healthStatus: {
              checkedTime: 12333333,
              status: 'UP'
            },
            environment: 'QA',
            statusHistory: {}

          }
        }
      },
      selectedDate: new Date(),
      selectedEnv: 'qa1',
      loading: false
    };
  }

  componentDidMount() {
    this.onCheckStatus();
    this.interval = setInterval(() => this.onCheckStatus(), 10 * 60 * 1000 );
  }

  onCheckStatus = async () => {
    this.setState({ loading: true });

    const { selectedEnv, selectedDate } = this.state;
    // const components = await getComponentStatus(selectedDate, selectedEnv, getFullDateFromTimestamp(Date.now()) ===  selectedDate);
    // this.setState({ components, loading: false });
  };

  handleDateChange = (date) => {
    // const formatedDate = getFullDateFromTimestamp(date);
    // console.log("render:handleDateChange", date, formatedDate);

    this.setState({ selectedDate: date }, () => this.onCheckStatus());

    clearInterval(this.interval);
    // console.log('interval', formatedDate, getFullDateFromTimestamp(Date.now()));
    // if(getFullDateFromTimestamp(Date.now()) ===  formatedDate){
    //   // console.log('Setting interval')
    //   this.interval = setInterval(() => this.onCheckStatus(), 10 * 60 * 1000 );
    // }
  };

  handleEnvironmenChange = event => {
    this.setState({ selectedEnv: event.target.value }, () => this.onCheckStatus());

  }

  render() {
    const { classes } = this.props;
    const { loading, selectedDate, selectedEnv, components } = this.state;
    // console.log("render:selectedDate", selectedDate);



    return (
      <Paper className={classes.root}>
        <Grid
          className={classes.grid}
          container
          justify="flex-end"
        >
          <Grid
            className={classes.selectEnv}
            item
            xs={6}
          >
            <FormControl >
              <InputLabel id="demo-simple-select-label">Environment</InputLabel>
              <Select
                id="demo-simple-select"
                labelId="demo-simple-select-label"
                onChange={this.handleEnvironmenChange}
                value={selectedEnv}
              >
                <MenuItem value={'dev'}>Dev</MenuItem>
                <MenuItem value={'qa1'}>QA</MenuItem>
                <MenuItem value={'stag'}>Stag</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                disableToolbar
                format="MM/dd/yyyy"
                id="date-picker-inline"
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                label="Select Date"
                margin="normal"
                onChange={this.handleDateChange}
                value={selectedDate}
                variant="inline"
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        {!loading && (<div className={classes.loadingBox}><CircularProgress className={classes.loading}/></div>)}
        {loading && (
          <Table
            className={classes.table}
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left"/>
                <TableCell align="center">Component</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Environment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(components).map((itemKey) => {
                const item = components[itemKey];
                return (
                  <ServiceHealthBar
                    checkedTime={item.componentStatus.healthStatus.checkedTime}
                    dependentServices={item.componentStatus.component.dependentServices}
                    env={item.componentStatus.component.environment}
                    history={item.statusHistory}
                    key={itemKey}
                    name={item.componentStatus.component.componentName}
                    product={item.componentStatus.component.product}
                    // selectedDate={getFullDateFromTimestamp(selectedDate)}
                    status={item.componentStatus.healthStatus.status}
                  />
                );
              })}
            </TableBody>
          </Table>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(ServiceTable);
