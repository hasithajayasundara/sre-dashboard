import React, { useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  LinearProgress
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import moment from "moment";

import {
  fetchDeployments,
  changeDeploymentsDuration
} from "../../../actions/dashboard";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%"
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

const Deployments = ({
  deployments,
  fetchDeployments,
  changeDeploymentsDuration
}) => {
  const classes = useStyles();
  let { fetching, error, total, filter, items } = deployments;
  useEffect(() => {
    fetchDeployments(filter);
  }, [fetchDeployments, filter]);
  return (
    <Card className={clsx(classes.root)}>
      <CardHeader
        subtitle={`${items.length} in total`}
        title="Recent Deployments"
      />
      <Divider />
      <CardContent className={classes.content}>
        {fetching ? (
          <LinearProgress></LinearProgress>
        ) : (
          <List>
            {items.map((item, i) => (
              <ListItem divider={i < items - 1} key={item.id}>
                <ListItemAvatar>
                  <img
                    alt="deployment"
                    className={classes.image}
                    src={item.imageUrl}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`Released ${moment(item.updatedAt).fromNow()}`}
                />
                <IconButton edge="end" size="small">
                  <MoreVertIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
          disabled={fetching}
          onClick={() =>
            changeDeploymentsDuration({
              from: moment("01/01/1970", "MM/DD/YYYY").valueOf(),
              to: moment().valueOf()
            })
          }
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

Deployments.propTypes = {
  className: PropTypes.string
};

function mapStateToProps({ dashboard }) {
  return { deployments: dashboard.deployments };
}

export default connect(
  mapStateToProps,
  { fetchDeployments, changeDeploymentsDuration }
)(Deployments);
