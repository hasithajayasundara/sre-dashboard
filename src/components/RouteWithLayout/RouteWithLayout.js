import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

const RouteWithLayout = props => {
  const {
    layout: Layout,
    component: Component,
    signedIn,
    history,
    path,
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

function mapStateToProps({ signIn }) {
  return { signedIn: signIn.signedIn };
}

export default connect(mapStateToProps, {})(withRouter(RouteWithLayout));
