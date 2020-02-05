import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import MetricCard from "../common/MetricCard";
import { fetchTotalUsers } from "../../../actions/dashboard";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  },
  error: {
    color: "red"
  }
}));

const TotalUsers = ({ totalUsers, fetchTotalUsers }) => {
  useEffect(() => {
    fetchTotalUsers();
  }, [fetchTotalUsers]);
  return (
    <MetricCard
      useStyles={useStyles}
      variant="99.5%"
      title="TOTAL USERS"
      fetching={totalUsers.fetching}
      error={totalUsers.error}
    ></MetricCard>
  );
};

function mapStateToProps({ dashboard }) {
  return { totalUsers: dashboard.metrics.totalUsers };
}

export default connect(
  mapStateToProps,
  { fetchTotalUsers }
)(TotalUsers);
