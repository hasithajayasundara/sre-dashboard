import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Tooltip } from '@material-ui/core';
// import { SUCCESS_COLOR, FAILURE_COLOR, UNAVAILABLE_COLOR } from '../../../constants';

const styles = () => ({});

const StatusIcon = ({ status, title, style }) => {
  let statusIconColor;
  switch (status) {
    case 'UP':
      statusIconColor = '#258933';
      break;
    case 'DOWN':
      statusIconColor = '#a30000';
      break;
    default:
      statusIconColor = '#258933';
      break;
  }
  return (
    <Tooltip title={title}>
      <FiberManualRecordIcon style={{ color: statusIconColor, ...style }} />
    </Tooltip>
  );
};

export default StatusIcon;
