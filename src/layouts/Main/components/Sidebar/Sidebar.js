import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import TimeIcon from '@material-ui/icons/Timer';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SettingPhoneIcon from '@material-ui/icons/SettingsPhone';
import WarningIcon from '@material-ui/icons/Warning';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import DescriptionlIcon from '@material-ui/icons/Description';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Profile, SidebarNav, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />,
      disabled: false
    },
    {
      title: 'SLO',
      href: '/slo',
      icon: <TimeIcon />,
      disabled: false
    },
    {
      title: 'Health Dashboard',
      href: '/health',
      icon: <LocalHospitalIcon />,
      disabled: true
    },
    {
      title: 'Usage',
      href: '/usage',
      icon: <PeopleIcon />,
      disabled: false
    },
    {
      title: 'Support Engineering',
      href: '/support',
      icon: <SettingPhoneIcon />,
      disabled: true
    },
    {
      title: 'Quality Engineering',
      href: '/quality',
      icon: <VerifiedUserIcon />,
      disabled: true
    },
    {
      title: 'Monthly Service Report',
      href: '/msr',
      icon: <DescriptionlIcon />,
      disabled: false
    },
    {
      title: 'SLA Violations',
      href: '/sla',
      icon: <WarningIcon />,
      disabled: true
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
