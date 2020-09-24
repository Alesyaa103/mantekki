import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainPage from '../../components/MainPage';
import Auth from '../Auth';
import Admin from '../../components/Admin';
import PrivateRoute from '../PrivatRoute';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/login" component={Auth}/>
      <PrivateRoute exact path="/admin" component={Admin}/>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routing;