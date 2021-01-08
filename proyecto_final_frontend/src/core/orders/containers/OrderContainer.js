import React from 'react';
import OrderComponent from '../components/OrderComponent';
import { PageHeader } from 'antd';
import IntlMessages from "util/IntlMessages";

const OrderContainer = () => {
  return (
    <>
      <PageHeader
        ghost={true}
        title={<IntlMessages id="Cart" />}
      />
      <OrderComponent />
    </>
  )
};

export default OrderContainer;
