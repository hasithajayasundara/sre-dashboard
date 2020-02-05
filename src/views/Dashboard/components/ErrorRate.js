import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import { fetchErrorRate } from "../../../actions/dashboard";
import MetricCard from "../common/MetricCard";

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
    backgroundColor: theme.palette.error.main,
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
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  error: {
    color: "red"
  }
}));

const ErrorRate = ({ errorRate, fetchErrorRate }) => {
  useEffect(() => {
    fetchErrorRate();
  });
  return (
    <MetricCard
      useStyles={useStyles}
      variant="99.5%"
      title="ERROR RATE"
      fetching={errorRate.fetching}
    ></MetricCard>
  );
};

function mapStateToProps({ dashboard }) {
  return { errorRate: dashboard.metrics.errorRate };
}

export default connect(
  mapStateToProps,
  { fetchErrorRate }
)(ErrorRate);
