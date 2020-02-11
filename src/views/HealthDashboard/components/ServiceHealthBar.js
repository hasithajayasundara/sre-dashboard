import React from 'react';
import { TableCell, TableRow, ListItemText, Collapse, ListItemIcon, List, ListItem } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import { getLastUpdatedTime, getTimeIntervalFromHourOfDay } from '../../../utils/dateTimeUtil';
// import { getHourlyStatus, getStatusHistoryOfDay } from '../../../utils/statusCheckUtil';
import StatusIcon from './StatusIcon';

const ServiceHealthBar = ({ status, name, checkedTime, product, env, history, selectedDate, dependentServices }) => {
  const [open, setOpen] = React.useState(false, true);
  // const dailyHistory = getStatusHistoryOfDay(selectedDate, history);
  const statusObj = {
    a: 'UP',
    b: 'UP',
    c: 'UP',
    d: 'UP',
    e: 'UP',
    f: 'UP',
    g: 'UP',
    h: 'UP',
    i: 'UP',
    j: 'UP',
    k: 'UP',
    l: 'UP'
  };

  function handleClick() {
    setOpen(!open);
  }
  return (
    <TableRow style={{ verticalAlign: 'top'  }}>
      <TableCell align="left" style={{ width: '1%',  }}>
        <StatusIcon status={status} title={'05 Feb 2020 - 12:33AM'}  style={{ margin: '8px 0px' }}/>
      </TableCell>
      <TableCell component="th" scope="row" style={{ width: '100%' }}>
        <ListItem button onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary={name} size="small" dense="true" />
          <div>
          {Object.keys(statusObj).map((hour) => {
            const hourlyStatus = statusObj[hour];
            return <StatusIcon key={hour} status={hourlyStatus} title={'05 Feb 2020 - 12:33AM'} />;
          })}
        </div>

        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {Object.keys(dependentServices).map((depServiceName) => {
              const depServiceObj = dependentServices[depServiceName];
              console.log(dependentServices);
              const depServiceStatusObj = 'Good';
              return (
                <ListItem button>
                  <ListItemIcon>
                    <StatusIcon status={depServiceObj.status} title={'getLastUpdatedTime(checkedTime)'} />
                  </ListItemIcon>
                  <ListItemText primary={depServiceName} size="small" dense="true" />
                  <div>
                    {Object.keys(depServiceStatusObj).map((hour) => {
                      const depServiceHourlyStatus = depServiceStatusObj[hour];
                      return <StatusIcon key={hour} status={depServiceHourlyStatus} title={'getTimeIntervalFromHourOfDay(hour)'} style={{ width: '0.8em', margin: '0.1em'}}/>;
                    })}
                  </div>
                </ListItem>

              );
            })}
          </List>
        </Collapse>

      </TableCell>
      {/* <TableCell align="left">
        {history.slice(0, 24).map((attempt) => {
          statusIconColor = attempt.status === 'UP' ? '#76FF03' : '#EC407A';
          return <FiberManualRecordIcon style={{ color: statusIconColor }} />;
        })}
      </TableCell> */}
      {/* <TableCell align="left">
        {history.reverse().map((attempt) => {
          statusIconColor = attempt.status === 'UP' ? '#76FF03' : '#EC407A';
          return <FiberManualRecordIcon style={{ color: statusIconColor }} />;
        })}
      </TableCell> */}
      <TableCell align="left">{product}</TableCell>
      <TableCell align="left">{env}</TableCell>
    </TableRow>
  );
};
export default ServiceHealthBar;
