import React from 'react';
import { Button } from "antd";
import IntlMessages from '../../../util/IntlMessages';

export const Columns = (setPricing) => [
  {
    title: '#',
    dataIndex: 'rowKey',
    key: 'rowKey',
  },
  {
    title: <IntlMessages id="Name" />,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: <IntlMessages id="Action" />,
    render: (d, text) => <span><Button  onClick={() => setPricing([])} icon="close-circle" /></span>
  }
];


export default Columns;
