import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwt from "jsonwebtoken";

const PrivateRoute = ({ component: Component, isAdmin, ...rest }) => {
  const token = localStorage.getItem("token");
return(
  <Route
    {...rest}
    render={props => (jwt.decode(token)
      ? <Component {...props} />
      : <Redirect to='/' />)}
  />
);}


PrivateRoute.propTypes = {
  isAdmin: PropTypes.bool,
  component: PropTypes.any.isRequired,
  location: PropTypes.any
};

PrivateRoute.defaultProps = {
  isAdmin: false,
  location: undefined
};

const mapStateToProps = rootState => ({
  isAdmin: rootState.user.isAdmin
});

export default connect(mapStateToProps)(PrivateRoute);
