import React from 'react';
import IntlMessages from "../../../util/IntlMessages";

export const Columns = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: <IntlMessages id="Package" />,
    dataIndex: 'paqueteId',
    key: 'paqueteId',
    render: (d) => {
      switch (d) {
        case 1: {
          return 'Pre-Boda'
        }
        case 2: {
          return 'Boda'
        }
        case 3: {
          return 'Cumpleaños'
        }
        case 4: {
          return 'Video de evento'
        }
        default: {
          return 'Paquete desconocido'
        }
      }
    }
  }, {
    title: <IntlMessages id="Cost" />,
    dataIndex: 'paqueteId',
    render: (d) => {
      switch (d) {
        case 1: {
          return 1000
        }
        case 2: {
          return 5000
        }
        case 3: {
          return 3000
        }
        case 4: {
          return 4000
        }
        default: {
          return 0
        }
      }

    }

  }

];

export default Columns;
