import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductRoute from '../core/products/routes';
import ClientRoute from '../core/clients/routes';
import OrderRoute from '../core/orders/routes';
import InvoiceRoute from '../core/invoice/routes';
import GraphRoute from '../core/graphs/containers/routes';

import asyncComponent from "util/asyncComponent";

const App = ({ match }) => {
  console.log(match);
  return (
    <div className="gx-main-content-header">
      <Switch>
        <Route path={`${match.url}products`} exact component={ProductRoute} />
        <Route path={`${match.url}clients`} exact component={ClientRoute} />
        <Route path={`${match.url}orders`} exact component={OrderRoute} />
        <Route path={`${match.url}invoices`} exact component={InvoiceRoute} />
        <Route path={`${match.url}graphs`} exact component={GraphRoute} />

      </Switch>
    </div>
  );
};

export default App;
