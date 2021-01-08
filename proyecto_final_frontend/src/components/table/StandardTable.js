import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';

const useApiFromService = (request, initialParams) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSizeOptions: ['10', '20', '50', '100', '200'],
    showSizeChanger: true,
    showQuickJumper: true,
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSize: 10,
    position: 'bottom',
    total: 0
  });

  const fetch = useCallback(
    async params => {
      setLoading(true);
      const data = await request(params);
      setData(data.data);
      const nextPagination = { ...pagination };
      nextPagination.current = params ? params.page : 1;
      nextPagination.pageSize = params ? params.limit : 10;
      nextPagination.total = data.records_total;
      setPagination(nextPagination);
      setLoading(false);
    },
    [pagination, request, initialParams]
  );

  const onChangeHandler = (pagination, filters, sorter) => {
    const pager = { ...pagination, ...filters };
    const { columnKey, order } = sorter;
    const orderBy = order == 'ascend' ? 'asc' : 'desc';
    const sortBy = columnKey;
    pager.orderBy = orderBy;
    pager.sortBy = sortBy;
    pager.current = pagination.current;
    setPagination(pager);
    fetch({
      page: pager.current,
      limit: pager.pageSize,
      ...pager,

    });
  }

  useEffect(() => {
    fetch();
  }, []);

  return { data, loading, pagination, onChangeHandler };
};

const handleShowTotal = (total, range) => {
  return `${range[0]}-${range[1]} of ${total} items`
}

export const StandardTable = ({ columns, fetchFromService, fetchService = false, ...props }) => {

  const { data, loading, onChangeHandler, pagination } = useApiFromService(fetchFromService, {});
  const rePagination = {
    pageSizeOptions: pagination.pageSizeOptions,
    defaultPageSize: pagination.defaultPageSize,
    defaultCurrent: pagination.current | pagination.defaultCurrent,
    showTotal: handleShowTotal,
    position: pagination.position,
    ...pagination
  };

  return (
    <Table className={`gx-table-responsive`}
      rowKey={record => record.id}
      dataSource={data}
      columns={columns}
      loading={loading}
      onChange={onChangeHandler}
      pagination={rePagination}
    />
  )
}
