import React from 'react';
import { Table, Card } from 'antd';
import Content from '../../../util/Content';

const TableComponent = ({ Table, Name, ...props }) => {

  return (
    <Content>
      <Card title={`${Name ? Name : ' '}`}>
        {Table}
      </Card>
    </Content>
  )
}

export default TableComponent;
