import React, { useEffect, useState } from 'react';
import { PageHeader } from 'antd';
import TableInvoices from '../components/TableInvoices';
import { StandardTableWithoutPagination } from '../../../components/table/StandardTableWithoutPagination';
import Columns from '../components/Columns';
import IntlMessages from "../../../util/IntlMessages";
import { fetchEvents } from '../service';
import { useSelector } from 'react-redux';

const InvoiceContainer = () => {
  const [total, setTotal] = useState(0);
  const authToken = useSelector(({ settings }) => settings.authUser)
  const products = [0, 1000, 5000, 3000, 4000];
  useEffect(() => {
    fetchEvents(authToken.userId)
      .then(res => {
        res.map((data, index) => {
          if (data.paqueteId !== undefined) {
            setTotal(prevState => prevState + products[data.paqueteId])
          }
        })
      });
    return () => { };
  }, []);
  return (
    <>
      <PageHeader
        title={<IntlMessages id="Invoices" />}
        ghost={true}
      />
      <TableInvoices
        Name={<h3><IntlMessages id="Invoices" /></h3>}
        Table={<StandardTableWithoutPagination
          fetchService={true}
          fetchFromService={() => fetchEvents(authToken.userId)}
          columns={Columns}
        />}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div><IntlMessages id="Total Cost" />: {total}</div>
      </div>

    </>
  )
};

export default InvoiceContainer;
