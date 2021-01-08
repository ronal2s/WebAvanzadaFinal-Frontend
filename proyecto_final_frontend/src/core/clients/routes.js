import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const path = {
  home: '/clients'
}

const Routes = ({ match }) => {
  return (<Switch>
    <Route path={`${path.home}`} exact component={asyncComponent(() => import('./containers/ClientContainer'))} />
  </Switch>)
}

export default Routes;
