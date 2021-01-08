import React from 'react';
import { Form, Input, Switch, Button } from 'antd';
import { Controller, useForm } from "react-hook-form";
import MyInput from '../../../components/AntFields';
import IntlMessages from "../../../util/IntlMessages";

const formItemLayout = {
  labelCol: {
    sm: { span: 24 },
    md: { span: 7 },
    lg: { span: 3 },
  },
  wrapperCol: {
    sm: { span: 24 },
    md: { span: 17 },
    lg: { span: 21 },
  },
}


const FormClient = ({ initialValues, onSubmit }) => {
  const { handleSubmit, control, formState, errors } = useForm({ defaultValues: initialValues });
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MyInput
        AntComponent={Input}
        formState={formState}
        errors={errors}
        name="name"
        label={<IntlMessages id="Name" />}
        type="text"
        rules={{ required: <IntlMessages id="Required" /> }}
        control={control}
        formItemLayout={formItemLayout}
      />
      <MyInput
        AntComponent={Input}
        formState={formState}
        errors={errors}
        name="username"
        label={<IntlMessages id="User" />}
        type="text"
        rules={{ required: <IntlMessages id="Required" /> }}
        control={control}
        formItemLayout={formItemLayout}
      />
      <MyInput
        AntComponent={Input}
        formState={formState}
        errors={errors}
        name="password"
        label={<IntlMessages id="Password" />}
        type="password"
        rules={{ required: <IntlMessages id="Required" /> }}
        control={control}
        formItemLayout={formItemLayout}
      />
      <MyInput
        AntComponent={Switch}
        formState={formState}
        errors={errors}
        name="admin"
        label={<IntlMessages id="Employee" />}
        control={control}
        formItemLayout={formItemLayout}
      />
      <Button htmlType="submit" block type="primary">
        <IntlMessages id="Add Customer" />
      </Button>
    </Form>
  );
};

export default FormClient;
