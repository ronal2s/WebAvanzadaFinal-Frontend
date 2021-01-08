import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const path = {
  home: '/products'
}

const Routes = ({ match }) => {
  return (<Switch>
    <Route path={`${path.home}`} exact component={asyncComponent(() => import('./containers/ProductContainer'))} />
  </Switch>)
}

export default Routes;
