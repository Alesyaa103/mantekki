import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainPage from '../MainPage';
import Auth from '../Auth';
import Admin from '../Admin';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Auth}/>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/admin" component={Admin}/>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routing;