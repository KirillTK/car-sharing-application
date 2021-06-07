import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { updateVehicle } from '../../actions/vehiclesActions';

const { useForm } = Form;
const { Option } = Select;


export const VehicleForm = ({ vehicle, vehicleStatuses, vehicleBrands }) => {
  const [form] = useForm();
  const [currentVehicleImagePath, setVehicleImagePath] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = useCallback((formValues) => {
    console.log(formValues);

    dispatch(updateVehicle({
      id: vehicle.id,
      ...formValues,
    }))
  }, [dispatch, vehicle.id]);

  useEffect(() => {
    form.setFieldsValue({
      name: vehicle?.name,
      statusId: vehicle?.stauts.id,
      position: vehicle?.position,
      isFree: vehicle?.isFree,
      price: vehicle?.price,
      brandId: vehicle?.brandId,
      image: vehicle?.image,
    });

    setVehicleImagePath(vehicle?.image);
  }, [vehicle, form]) ;

  return (<Form form={form} onFinish={handleSubmit}>
    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="price" label="Price" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="position" label="Place" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="isFree" label="Free" valuePropName="checked">
        <Checkbox />
      </Form.Item>
      <Form.Item name="brandId" label="Brand" rules={[{ required: true }]}>
        <Select
          placeholder="Brand"
        >
          {vehicleBrands.map(({ name, id }) => <Option value={id} key={name}>{name}</Option>)}
        </Select>
      </Form.Item>
      <Form.Item name="statusId" label="Status" rules={[{ required: true }]}>
        <Select
          placeholder="Status"
        >
          {vehicleStatuses.map(({ status, id }) => <Option value={id} key={status}>{status}</Option>)}
        </Select>
      </Form.Item>
      <Form.Item name="image" label="Vehicle Preview" rules={[{ required: true }]}>
        <Input onChange={(event) => {
          setVehicleImagePath(event.target.value);
        }} />
      </Form.Item>
      <img src={currentVehicleImagePath} alt={vehicle.name} style={{ width: '100%', height: 'auto', maxWidth: '300px', marginBottom: '20px' }}/>
      <Form.Item>
      <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
  </Form>);
};