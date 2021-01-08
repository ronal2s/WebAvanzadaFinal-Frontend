import React, { useState, useCallback, useEffect } from 'react'
import { PageHeader, Button } from 'antd';
import TableComponent from '../components/TableComponent';
import Column from '../components/Column';
import { StandardTableWithoutPagination } from '../../../components/table/StandardTableWithoutPagination';
import AddClientComponent from '../components/AddClientComponent';
import FormClient from '../components/FormClient';
import { fetchUsers } from '../service';
import { useSelector } from 'react-redux';
import { parseJwt, successMessage, URL_API } from '../../../rayoDevCore/utils';
import IntlMessages from "../../../util/IntlMessages";
import { history } from '../../../appRedux/store';
import { restClientWithOutAuth } from "../../../rayoDevCore/restClient";

const useClientForm = () => {
  const [useFormClient, setUseFormClient] = useState({
    name: '',
    password: '',
    username: '',
    admin: false,
  })

  return { useFormClient, setUseFormClient };
};

//Agregar cliente desde administrador
const onSubmit = async (e) => {
  successMessage('Registrado correctamente');
  // console.log(e);
  const data = await restClientWithOutAuth(`${URL_API}/users/auth/signup`, 'POST', e);
  history.push('/clients');
}

const useSwitchRenderHooks = () => {
  const [renderState, setRenderState] = useState('');
  const { useFormClient } = useClientForm();

  const authToken = useSelector(({ settings }) => settings.authUser);
  const user = authToken.token ? parseJwt(authToken.token)['user'] : null;

  const renderSwitch = useCallback(
    async params => {
      setRenderState(params);
    },
    [setRenderState],
  );

  useEffect(() => {
    if (user != null && user.admin == false) {
      history.push('/orders')
    }
  }, [])

  const RenderComponent = () => {
    switch (renderState) {
      case 'RENDER_ADD': {
        return <AddClientComponent
          extra={<Button  onClick={() => setRenderState(null)}><IntlMessages id="Back" /></Button>}
          Name={<h3><IntlMessages id="Add Customer" /></h3>}
          Form={<FormClient
            initialValues={useFormClient}
            onSubmit={onSubmit}
          />}
        />;
      }
      default: {
        return (<TableComponent
          Name={<h3><IntlMessages id="Customers" /></h3>}
          onSwitch={renderSwitch}
          user={user}
          Table={<StandardTableWithoutPagination
            fetchFromService={fetchUsers}
            fetchService={true}
            columns={Column()}
          />}
        />)
      }
    }
  }

  return { renderState, renderSwitch, RenderComponent }
};


const ClientContainer = () => {
  const { renderState, renderSwitch, RenderComponent } = useSwitchRenderHooks();
  return (
    <>
      <PageHeader
        title={<IntlMessages id="Customers" />}
        subTitle={` `}
        ghost={true}
      />
      <RenderComponent />
    </>
  )
}

export default ClientContainer;
