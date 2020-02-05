import React from "react";
import { makeStyles } from "@material-ui/styles";

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
  }
}));

const ErrorRate = () => {
  return (
    <MetricCard
      useStyles={useStyles}
      variant="99.5%"
      title="ERROR RATE"
    ></MetricCard>
  );
};

export default ErrorRate;
