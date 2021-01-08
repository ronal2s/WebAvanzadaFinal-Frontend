import React, { useCallback, useState } from 'react';
import Content from '../../../util/Content';
import { Row, Col, Card, Select, Button, Divider } from 'antd';
import { StandardTableWithoutPagination } from '../../../components/table/StandardTableWithoutPagination';
import Columns from './Columns';
import { agregarPlan } from '../containers/service';
import { successMessage } from '../../../rayoDevCore/utils';
import IntlMessages from '../../../util/IntlMessages';

const Option = Select.Option;

const usePricing = () => {
  const [pricing, setPricing] = useState([]);

  const addPricing = useCallback(
    async params => {

      switch (params) {
        case '1': {
          setPricing(prices => [{ rowKey: 1, name: 'Pre-Boda', paqueteId: 1 }])
          break;
        }
        case '2': {
          setPricing(prices => [{ rowKey: 2, name: 'Boda', paqueteId: 2 }])
          break;
        }
        case '3': {
          setPricing(prices => [{ rowKey: 3, name: 'Cumpleaños', paqueteId: 3 }])
          break;
        }
        case '4': {
          setPricing(prices => [{ rowKey: 4, name: 'Video de evento', paqueteId: 4 }])
          break;
        }
      }
    },
    [setPricing],
  )

  return { pricing, setPricing, addPricing };
}

const OrderComponent = () => {

  const { pricing, setPricing, addPricing } = usePricing();

  return (
    <Content>
      <Row>
        <Col xs={24} md={12} lg={12}>
          <Card title={<IntlMessages id="Get Order" />}>
            <Select style={{ width: '50%' }} onChange={addPricing} defaultValue={0}>
              <Option value={0} select ><IntlMessages id="Select Plan" /></Option>
              <Option key={1}>Pre-Boda - 1000</Option>
              <Option key={2}>Boda - 5000</Option>
              <Option key={3}>Cumpleaños - 3000 </Option>
              <Option key={4}>Video de evento - 4000</Option>
            </Select>
            <Divider />

            <Button block type="primary">
              <IntlMessages id="Add Plan" />
            </Button>

          </Card>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <Card title={<IntlMessages id="Orders" />}>
            <StandardTableWithoutPagination
              dataSource={pricing.length > 0 ? pricing : []}
              columns={Columns(setPricing)}
            />
            <Divider />
            <Button disabled={pricing.length == 0} block type="primary"
              onClick={() => { agregarPlan(pricing[0]); successMessage(<IntlMessages id="Paid Sucessfully" />); setPricing([]) }}>
              <IntlMessages id="Pay Plan" />
            </Button>
          </Card>
        </Col>
      </Row>
    </Content>
  )
};

export default OrderComponent;
