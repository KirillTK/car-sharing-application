import React from 'react';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { getControlsState } from '../../selectors/controls.selector';
import styles from './styles.module.less';

const { Option } = Select;

export const Payments = ({ handleChangeForm, defaultValue }) => {
  const { paymentsMethod  } = useSelector(getControlsState);

  return <Select defaultValue={defaultValue} onChange={(value) => handleChangeForm({ paymentId: value })} className={styles.paymentsContainer} placeholder="Choose payment">
    {paymentsMethod.map(({ id, method }) => <Option value={id} key={id}>{method}</Option>)}
    </Select>;
}
