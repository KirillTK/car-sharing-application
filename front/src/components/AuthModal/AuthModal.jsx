import React, { useCallback } from 'react';
import { Modal, Form, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { message  } from 'antd';
import { getUiState } from '../../selectors/ui.selectors';
import { uiSlice } from '../../reducers/ui.reducer';
import { loginAction } from '../../actions/authActions';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


export const AuthModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { activeModal, modalParams }  = useSelector(getUiState);

  const handleSubmit = useCallback(async (values)=> {
    const result = await dispatch(loginAction(values));

    if(result?.error) {
      message.error('Invalid credential');
      return;
    }

    history.push(`order/${modalParams?.id}`);

  }, [dispatch, history, modalParams]);

  const handleHide = useCallback(() => {
    dispatch(uiSlice.actions.hideModal());
  }, [dispatch]);

  return  <Modal title="Login" visible={activeModal} onOk={handleSubmit} onCancel={handleHide} footer={[
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
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

</Modal>
}