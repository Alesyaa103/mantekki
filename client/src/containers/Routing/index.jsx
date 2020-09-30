import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainPage from '../MainPage';
import Auth from '../Auth';
import Admin from '../../components/Admin';
import PrivateRoute from '../../components/PrivateRoute';
import CollectionPage from '../CollectionPage';
import { loadLoggedUser } from '../../actions/userAction';

const Routing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLoggedUser());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/login" component={Auth}/>
      <PrivateRoute exact path="/admin" component={Admin}/>
      <Route exact path="/:collection" component={CollectionPage}/>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routing;