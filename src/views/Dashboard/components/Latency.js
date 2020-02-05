import React from "react";
import { makeStyles } from "@material-ui/styles";
import MetricCard from "../common/MetricCard";
import InsertChartIcon from "@material-ui/icons/InsertChartOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 700,
    color: "textSecondry"
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
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

const Latency = () => {
  return (
    <MetricCard useStyles={useStyles} variant="99.5%" title="LATENCY">
      <InsertChartIcon />
    </MetricCard>
  );
};

export default Latency;
