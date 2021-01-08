import React from 'react';
import { Table, Card, Button } from 'antd';
import Content from '../../../util/Content';
import IntlMessages from "../../../util/IntlMessages";

const TableComponent = ({ Table, Name, onSwitch, user, ...props }) => {

  return (
    <Content>
      <Card title={Name}
        extra={user ? user.admin ? <Button type="primary" onClick={() => onSwitch('RENDER_ADD')}>
          <IntlMessages id="New"/>
        </Button> : null : null}>
        {Table}
      </Card>
    </Content>
  )
}

export default TableComponent;
