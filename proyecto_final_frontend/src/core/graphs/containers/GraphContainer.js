import React, { useState, useCallback, useEffect } from 'react';
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, PieChart, Pie, Cell, Legend } from 'recharts';
import { Tooltip, Row, Col, Card } from 'antd';
import Content from '../../../util/Content';
import { fetchGraphs } from './services';
import IntlMessages from "../../../util/IntlMessages";

// const data = [
//   { name: 'Group A', value: 6 },
//   { name: 'Group B', value: 1 },
// ];
const COLORS = ['#0088FE', '#00C49F'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const convertData = (array) => {
  const label = Object.keys(array);

  return label.map(e => {
    return { name: array[e].name, Cantidad: array[e].count };
  });
}

const useFetchGraphs = () => {
  const [data, setData] = useState([]);
  const [realizados, setRealizados] = useState([]);

  const fetch = useCallback(
    async params => {
      const res = await fetchGraphs(params);
      const dataRes = [
        { name: <IntlMessages id="Pending" />, value: res.cantPedidosPediente },
        { name: <IntlMessages id="Done" />, value: res.cantPedidosRealizados }
      ];
      const graphData = convertData(res.data);
      setData(dataRes);
      setRealizados(graphData);
    },
    [],
  )

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { fetch, data, setData, realizados };
}


const GraphContainer = () => {

  const { fetch, data, setData, realizados } = useFetchGraphs();

  return (
    <Content>
      <Row>
        <Col xs={24} md={12}>
          <Card title={<IntlMessages id="History" />}>
            <Row>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart width={1000} height={1000}>
                  <Legend verticalAlign="top" height={36} />
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title={<IntlMessages id="Today" />}>
            <ResponsiveContainer width="100%" height={750}>
              <BarChart data={realizados}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={<IntlMessages id="Quantity" />} stackId="a" fill="#10316B" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </Content >
  )
};

export default GraphContainer;
