import React, { useCallback } from 'react';
import { Form, Input, Button, Select, Checkbox, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { MODALS } from '../../../constants/modals.const';
import { uiSlice } from '../../../reducers/ui.reducer';
import { getControlsState } from '../../../selectors/controls.selector';
import { getUiState } from '../../../selectors/ui.selectors';
import { addVehicle } from '../../../actions/vehiclesActions';


const { useForm }  = Form;
const { Option } = Select;


export const AddVehicleModal = () => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const { activeModal }  = useSelector(getUiState);
  const { vehicleStatuses, vehicleBrands, carGeneration, carCountries } = useSelector(getControlsState);

  const isModalVisible = activeModal === MODALS.addVehicle;

  const handleClose = useCallback(() => {
    dispatch(uiSlice.hideModal());
  }, [dispatch])


  const handleSubmit = useCallback((vehicle) => {
      dispatch(addVehicle(vehicle));
      handleClose();
  }, [dispatch, handleClose]);

  return  (<Modal title="Add vehicle" visible={isModalVisible} onOk={handleSubmit} onCancel={handleClose} footer={[
    <Button key="back" onClick={handleClose}>
      Cancel
  </Button>,
  ]}>
    <Form form={form} onFinish={handleSubmit}>
    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="image" label="Image URL" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="price" label="Price" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="odometer" label="Odometer" rules={[{ required: true }]}>
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
      <Form.Item name="carGenerationId" label="Car Generation" rules={[{ required: true }]}>
        <Select
          placeholder="Generation"
        >
          {carGeneration.map(({ range, id }) => <Option value={id} key={range}>{range}</Option>)}
        </Select>
      </Form.Item>
      <Form.Item name="vehicleCountriesId" label="Car Country" rules={[{ required: true }]}>
        <Select
          placeholder="Country"
        >
          {carCountries.map(({ country, id }) => <Option value={id} key={country}>{country}</Option>)}
        </Select>
      </Form.Item>
      <Form.Item>
      <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
  </Form>
  </Modal>);
}
