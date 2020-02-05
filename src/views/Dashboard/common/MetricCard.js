import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const MetricCard = props => {
  const classes = props.useStyles();

  return (
    <Card className={clsx(classes.root)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={classes.title} gutterBottom variant="body2">
              {props.title}
            </Typography>
            <Typography variant="h3" className={classes.variant}>
              {props.variant}
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
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography className={classes.differenceValue} variant="body2">
            5%
          </Typography>
          <Typography className={classes.caption} variant="caption">
            Since last month
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

MetricCard.propTypes = {
  className: PropTypes.string
};

export default MetricCard;
