import React from 'react'
import { Select, Form } from 'antd'
import { Controller } from 'react-hook-form';

const FormItem = Form.Item;
const { Option } = Select;

const MyInput = ({
  AntComponent,
  formItemLayout,
  label,
  hasFeedback,
  type,
  control,
  selectOptions,
  formState,
  errors,
  help,
  ...props
}) => {
  const fieldName = props.name;
  const touched = formState.touched[fieldName] !== undefined ? formState.touched[fieldName] : false;
  const submitted = formState.submitCount > 0;
  const hasError = errors[fieldName] !== undefined ? true : false;
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;

  return (<>
    <FormItem {...formItemLayout}
      label={label}
      hasFeedback={
        (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
      }
      help={hasError ? errors[fieldName].message : false}
      validateStatus={submittedError || touchedError ? "error" : "success"}
    >
      <Controller
        as={
          <AntComponent
            type={type} {...props}>
            {selectOptions && selectOptions.map((value, index) => <Option key={index} value={value.id}>{value.name}</Option>)}
          </AntComponent>}
        control={control}
        {...props}
      />
    </FormItem>
  </>)
};

export default MyInput;
