import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Tooltip,
  CircularProgress
} from "@material-ui/core";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ErrorIcon from "@material-ui/icons/Error";

const renderMetricTrend = (trend, classes) => {
  let { slope = 0, description = "", value = "" } = trend;
  let text = (
    <React.Fragment>
      <Typography
        className={
          slope >= 0
            ? classes.differenceValueSuccess
            : classes.differenceValueError
        }
        variant="body2"
      >
        {trend.value || ""}
      </Typography>
      <Typography className={classes.caption} variant="caption">
        {description || ""}
      </Typography>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      {slope < 0 ? (
        <ArrowDownwardIcon className={classes.differenceIconError} />
      ) : (
        <ArrowUpwardIcon
          className={classes.differenceIconSuccess}
        ></ArrowUpwardIcon>
      )}
      {text}
    </React.Fragment>
  );
};

const MetricCard = props => {
  const classes = props.useStyles();
  let { fetching, error, variant, spinnerColor, title, trend } = props;
  return (
    <Card className={clsx(classes.root)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={classes.title} gutterBottom variant="body2">
              {title}
            </Typography>
            <Typography variant="h3" className={classes.variant}>
              {fetching ? "" : error ? "" : variant}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              {props.children ? (
                React.cloneElement(props.children, {
                  className: classes.icon
                })
              ) : (
                <AttachMoneyIcon className={classes.icon} />
              )}
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          {fetching ? (
            <CircularProgress color={spinnerColor ? spinnerColor : "primary"} />
          ) : error ? (
            <React.Fragment>
              <Tooltip title={props.error}>
                <ErrorIcon color="error"></ErrorIcon>
              </Tooltip>
              <Typography className={classes.error} variant="caption">
                {props.error}
              </Typography>
            </React.Fragment>
          ) : (
            renderMetricTrend(trend, classes)
          )}
        </div>
      </CardContent>
    </Card>
  );
};

MetricCard.propTypes = {
  className: PropTypes.string
};

export default MetricCard;
