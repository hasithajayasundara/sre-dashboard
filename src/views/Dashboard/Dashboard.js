import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { getPosts } from "../../actions/dashboard";

import ErrorRate from "./components/ErrorRate";
import TotalUsers from "./components/TotalUsers";
import Latency from "./components/Latency";
import ErrorBudget from "./components/ErrorBudget";
import LatestSales from "./components/LatestSales/LatestSales";
import UsersByDevice from "./components/LatestSales/LatestSales";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import LatestOrders from "./components/LatestOrders/LatestOrders";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = props => {
  const classes = useStyles();

  useEffect(() => {
    props.getPosts();
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <ErrorRate />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Latency />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalUsers />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <ErrorBudget />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <LatestProducts />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(
  null,
  { getPosts }
)(Dashboard);
