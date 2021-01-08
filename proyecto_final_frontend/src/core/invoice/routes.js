import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const path = {
  home: '/invoices'
}

const Routes = ({ match }) => {
  return (<Switch>
    <Route path={`${path.home}`} exact component={asyncComponent(() => import('./containers/InvoiceContainer'))} />
  </Switch>)
}

export default Routes;
