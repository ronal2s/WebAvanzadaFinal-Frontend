import React from 'react';
import ButtonGroup from 'antd/lib/button/button-group';
import { Button } from 'antd';
export const Columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    sorter: true
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
    sorter: true
  },
  {
    title: 'Acciones',
    dataIndex: 'action',
    key: 'action',
    render: (d, text) => <span><ButtonGroup><Button type="primary">Modificar</Button><Button >Borrar</Button></ButtonGroup></span>
  }
]

export default Columns;
