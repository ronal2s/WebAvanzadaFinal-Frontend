import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const path = {
  home: '/graphs'
}

const Routes = ({ match }) => {
  return (<Switch>
    <Route path={`${path.home}`} exact component={asyncComponent(() => import('./GraphContainer'))} />
  </Switch>)
}

export default Routes;
