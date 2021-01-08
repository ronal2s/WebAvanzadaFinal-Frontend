import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';

const useApiFromService = (request, initialParams) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(
    async params => {
      setLoading(true);
      const data = await request(params);
      setData(data);
      setLoading(false);
    },
    [request, initialParams]
  );

  useEffect(() => {
    if (request)
      fetch();
  }, []);

  return { data, loading };
};

export const StandardTableWithoutPagination = ({ columns, fetchFromService, dataSource, fetchService = false, ...props }) => {

  const { data, loading } = useApiFromService(fetchService ? fetchFromService : false, {});

  return (
    <Table className={`gx-table-responsive`}
      rowKey={record => record.id || record.rowKey}
      dataSource={dataSource || data}
      columns={columns}
      loading={loading}
    />
  )
}
