import React, { useEffect } from 'react'
import { PageHeader, Layout, Table, Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions';
import TableComponent from '../components/TableComponent';
import Column from '../components/Column';
import { getProducts } from '../service';
import { StandardTableWithoutPagination } from '../../../components/table/StandardTableWithoutPagination';

const ProductContainer = () => {

  return (
    <>
      <PageHeader
        title="Products"
        subTitle={` `}
        ghost={true}
      />
      <TableComponent
        Name={`Products`}
        Table={<StandardTableWithoutPagination
          // dataSource={dataSource}
          columns={Column}
          fetchFromService={getProducts}
          fetchService={true}
        />} />
    </>
  )
}

export default ProductContainer;
