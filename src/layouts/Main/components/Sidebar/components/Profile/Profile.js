import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Typography } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "fit-content"
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1)
  }
}));

const Profile = ({ user }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.picture}
        to="/settings"
      />
      <Typography className={classes.name} variant="h6">
        {user.name}
      </Typography>
      {/* <Typography variant="body2">{user.bio}</Typography> */}
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

function mapStateToProps({ signIn }) {
  return { user: signIn.user };
}

export default connect(
  mapStateToProps,
  {}
)(Profile);
