import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const path = {
  home: '/orders'
}

const Routes = ({ match }) => {
  return (<Switch>
    <Route path={`${path.home}`} exact component={asyncComponent(() => import('./containers/OrderContainer'))} />
  </Switch>)
}

export default Routes;
