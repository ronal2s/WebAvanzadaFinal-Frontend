import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import IntlMessages from "util/IntlMessages";
import InfoView from "components/InfoView";
import MyInput from "../components/AntFields";
import { useForm } from "react-hook-form";
import { restClient, restClientWithOutAuth } from "../rayoDevCore/restClient";
import { URL_API, successMessage } from "../rayoDevCore/utils";
import { history } from "../appRedux/store";

const FormItem = Form.Item;

const SignUp = (props) => {
  const dispatch = useDispatch();

  const { handleSubmit, control, formState, errors } = useForm({ defaultValues: {} });

  const onSubmit = async (e) => {
    successMessage('Registrado correctamente');
    const data = await restClientWithOutAuth(`${URL_API}/users/auth/signup`, 'POST', e);
    history.push('/signin');
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">

          <div style={{
            textAlign: 'center',
            width: '100%',
            paddingTop: '5%',
            fontWeight: 400,
          }}>
            <IntlMessages id="New Customer" />
          </div>


          <div className="gx-app-login-content" style={{ width: '100%' }}>
            <Form onSubmit={handleSubmit(onSubmit)} className="gx-signup-form gx-form-row0">
              <MyInput
                AntComponent={Input}
                formState={formState}
                errors={errors}
                name="email"
                label={<IntlMessages id="Email" />}
                type="text"
                rules={{ required: `El campo email es requerido` }}
                control={control}
              />
              <MyInput
                AntComponent={Input}
                formState={formState}
                errors={errors}
                name="name"
                label={<IntlMessages id="Name" />}
                type="text"
                rules={{ required: `El campo nombre es requerido` }}
                control={control}
              />
              <MyInput
                AntComponent={Input}
                formState={formState}
                errors={errors}
                name="username"
                label={<IntlMessages id="User" />}
                type="text"
                rules={{ required: `El campo usuario es requerido` }}
                control={control}
              />
              <MyInput
                AntComponent={Input}
                formState={formState}
                errors={errors}
                name="password"
                label={<IntlMessages id="Password" />}
                type="password"
                rules={{ required: `El campo contraseña es requerido` }}
                placeholder={`Contraseña`}
                control={control}
              />
              <MyInput
                AntComponent={Input}
                formState={formState}
                errors={errors}
                name="password_digest"
                label={<IntlMessages id="Repeat Password" />}
                type="password"
                rules={{ required: `El campo contraseña es requerido` }}
                placeholder={`Contraseña`}
                control={control}
              />
              <FormItem>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="Register" />
                </Button>
                <Button type="ghost" className="gx-mb-0"><Link to="/signin">
                <IntlMessages id="Log In" />
                </Link></Button>
              </FormItem>
            </Form>
          </div>
          <InfoView />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
