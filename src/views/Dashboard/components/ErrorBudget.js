import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import MetricCard from "../common/MetricCard";
import InsertChartIcon from "@material-ui/icons/InsertChartOutlined";
import { connect } from "react-redux";

import { fetchErrorBudget } from "../../../actions/dashboard";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 700,
    color: "inherit"
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  caption: {
    color: "inherit"
  },
  variant: {
    color: "inherit"
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
  differenceIconSuccess: {
    color: theme.palette.success.main
  },
  differenceIconError: {
    color: theme.palette.error.main
  },
  differenceValueSuccess: {
    color: theme.palette.success.main,
    marginRight: theme.spacing(1)
  },
  differenceValueError: {
    color: theme.palette.error.main,
    marginRight: theme.spacing(1)
  }
}));

const ErrorBudget = ({ errorBudget, fetchErrorBudget }) => {
  useEffect(() => {
    fetchErrorBudget();
  }, [fetchErrorBudget]);
  return (
    <MetricCard
      useStyles={useStyles}
      variant={errorBudget.value || ""}
      trend={errorBudget.trend || {}}
      title="ERROR BUDGET"
      fetching={errorBudget.fetching}
      error={errorBudget.error}
      spinnerColor="inherit"
    >
      <InsertChartIcon />
    </MetricCard>
  );
};

function mapStateToProps({ dashboard }) {
  return { errorBudget: dashboard.metrics.errorBudget };
}

export default connect(
  mapStateToProps,
  { fetchErrorBudget }
)(ErrorBudget);
