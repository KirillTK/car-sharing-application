import React, { useCallback } from 'react';
import { Form, Input, InputNumber  } from 'antd';


const { useForm } = Form;

const initialValues =  {
  miles: 0,
  totalCost: 0,
}


export const TripInformation = ({ handleSubmit, previousValues = {}, vehicle }) => {
  const [form] = useForm();

  const initialValues2 = {
    ...initialValues,
    ...previousValues,
  }

  const handleChangeForm = useCallback(() => {
    handleSubmit(form.getFieldsValue());
  }, [handleSubmit, form]);

  const handleChangeMiles = useCallback((value) => {
    form.setFieldsValue({
      totalCost: value * vehicle?.price,
    });
    handleChangeForm();
  }, [form, handleChangeForm, vehicle]);

  // bookingStatusId, paymentId, promoCodeId = null, userId, vehicleId
  return <Form form={form} onFinish={handleSubmit} initialValues={initialValues2}>
    <Form.Item name="endPlace" label="End place" rules={[{ required: true }]}>
      <Input onChange={handleChangeForm} />
    </Form.Item>
    <Form.Item name="totalCost" label="Total Cost">
      <Input disabled />
    </Form.Item>
    <Form.Item name="miles" label="Miles" rules={[{ required: true }]}>
      <InputNumber onChange={handleChangeMiles} />
    </Form.Item>
  </Form>;
}
