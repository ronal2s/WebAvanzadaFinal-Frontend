import React from 'react';
import ButtonGroup from 'antd/lib/button/button-group';
import { Button, Tag } from 'antd';
import IntlMessages from "../../../util/IntlMessages";

export const Columns = () => [
  {
    title: <IntlMessages id="Name" />,
    dataIndex: 'name',
    key: 'name',
    sorter: true
  },
  {
    title: <IntlMessages id="User" />,
    dataIndex: 'username',
    key: 'username',
    sorter: true
  },
  {
    title: <IntlMessages id="Employee" />,
    dataIndex: 'admin',
    key: 'admin',
    render: (data) => (<span>{data == true ? <Tag color="green">
      <IntlMessages id="Employee" />
    </Tag> : <Tag color="red">
        <IntlMessages id="Not Employee" />
      </Tag>}</span>)
  },
  {
    title: <IntlMessages id="Actions" />,
    dataIndex: 'action',
    key: 'action',
    render: (d, text) => <span><ButtonGroup>
      <Button type="primary">
        <IntlMessages id="Edit" />
      </Button>
      <Button>
        <IntlMessages id="Delete" />
      </Button>
    </ButtonGroup></span>
  }
]

export default Columns;
