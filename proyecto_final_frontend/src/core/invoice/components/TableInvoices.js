import React from 'react';
import Content from '../../../util/Content';
import { Card } from 'antd';

const TableInvoices = ({ Name, Table }) => {
  return (
    <Content>
      <Card
        title={Name} >
        {Table}
      </Card>
    </Content>
  )
};

export default TableInvoices;
