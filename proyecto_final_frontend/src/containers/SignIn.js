import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import IntlMessages from "util/IntlMessages";
import InfoView from "components/InfoView";
import MyInput from "../components/AntFields";
import { signIn } from "../appRedux/actions";

const FormItem = Form.Item;

const SignIn = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.settings.authUser.token);

  const onSubmit = (e) => {
    dispatch(signIn(e));
  };

  useEffect(() => {
    if (token !== null) {
      props.history.push('/');
    }
  });

  const { getFieldDecorator } = props.form;
  const { handleSubmit, control, formState, errors } = useForm({ defaultValues: {} });


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
            <IntlMessages id="Log In" />
          </div>

          <div className="gx-app-login-content" style={{ width: '100%' }}>
            <Form onSubmit={handleSubmit(onSubmit)} className="gx-signin-form gx-form-row0">
              <MyInput
                AntComponent={Input}
                formState={formState}
                errors={errors}
                name="username"
                label={<IntlMessages id="User" />}
                type="text"
                rules={{ required: `El campo nombre es requerido` }}
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
                control={control}
              />
              <FormItem>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="Go" />
                </Button>
                <Button type="ghost" className="gx-mb-0">
                  <Link to="/signup">
                  <IntlMessages id="Register" />
                  </Link>
                </Button>
              </FormItem>
            </Form>
          </div>
          <InfoView />
        </div>
      </div>
    </div>
  );
};

const WrappedNormalLoginForm = Form.create()(SignIn);

export default WrappedNormalLoginForm;
