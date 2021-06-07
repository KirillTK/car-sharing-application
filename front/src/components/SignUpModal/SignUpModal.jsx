import React, { useCallback, useEffect } from 'react';
import { Modal, Form, Button, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { message  } from 'antd';
import { getControlsState } from '../../selectors/controls.selector';
import { getUiState } from '../../selectors/ui.selectors';
import { uiSlice } from '../../reducers/ui.reducer';
import { signUpAction } from '../../actions/authActions';
import { MODALS } from '../../constants/modals.const';
import { getGenderControls, getUserCountiesList } from '../../actions/controlsActions';

const { Option } = Select;


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


export const SignUpModal = () => {
  const dispatch = useDispatch();
  const { activeModal }  = useSelector(getUiState);
  const { genders, userCountries }  = useSelector(getControlsState);
  const isModalVisible = activeModal === MODALS.signUp;


  useEffect(() => {
    if(isModalVisible) {
      dispatch(getGenderControls());
      dispatch(getUserCountiesList());
    }
  }, [dispatch, isModalVisible]);

  const handleHide = useCallback(() => {
    dispatch(uiSlice.actions.hideModal());
  }, [dispatch]);

  const handleSubmit = useCallback(async (values)=> {
    const result = await dispatch(signUpAction(values));

    if(result?.error) {
      message.error('Invalid credential');
      return;
    }

    handleHide();
  }, [dispatch, handleHide]);

  return  <Modal title="SignUp" visible={isModalVisible} onOk={handleSubmit} onCancel={handleHide} footer={[
    <Button key="back" onClick={handleHide}>
      Cancel
  </Button>,
  ]}>
  <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="genderId" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="gender"
        >
          {genders.map(({ name, id }) => <Option value={id} key={name}>{name}</Option>)}
        </Select>
      </Form.Item>
      <Form.Item name="countryId" label="Country" rules={[{ required: true }]}>
        <Select
          placeholder="Country"
        >
          {userCountries.map(({ country, id }) => <Option value={id} key={country}>{country}</Option>)}
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

</Modal>
}
