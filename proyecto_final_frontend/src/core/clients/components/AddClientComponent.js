import React from 'react';
import Content from '../../../util/Content';
import { Card } from 'antd';

const AddClientComponent = ({ Name, Form, extra }) => {
  return (
    <Content>
      <Card
        title={Name}
        extra={extra || null}>
        {Form}
      </Card>
    </Content>
  )
};

export default AddClientComponent;
