import React, { useEffect, useState, useCallback  } from 'react';
import { Steps, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicleById } from '../../actions/vehiclesActions';
import { getBillPayments } from '../../actions/controlsActions';
import { getVegiclesState } from '../../selectors/vehicles.selector';
import { getAuthState } from '../../selectors/auth.selector';
import { VehicleInfo } from './VehicleInfo';
import { Payments } from './Payments';
import { TripInformation } from './TripInformation';

import styles from './styles.module.less';
import { billVehicle } from '../../actions/billActions';
import { useHistory } from 'react-router';
import {uiSlice} from "../../reducers/ui.reducer";

const { Step } = Steps;

const mapButtonTitleByStep = new Map([
  [0, 'Confirm'],
  [1, 'Next'],
  [2, 'Submit'],
])

export const Order = ({ match: { params: { id }}}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { vehicle } = useSelector(getVegiclesState);
  const { user } = useSelector(getAuthState);

  const [tripInfo, setTripInfo] = useState({});
  const [current, setCurrent] = useState(0);

  const handleChangeFormValues = useCallback((values) => {
    setTripInfo({
      ...tripInfo,
      ...values,
    });
  }, [tripInfo, setTripInfo]);

  const steps = [
  {
    title: 'Confirm Vehicle',
    content: <VehicleInfo vehicle={vehicle} />,
  },
  {
    title: 'Trip Info',
    content: <TripInformation handleSubmit={(values) => {
      setTripInfo(values);
    }} previousValues={tripInfo} vehicle={vehicle} />,
  },
  {
    title: 'Payments',
    content: <Payments handleChangeForm={handleChangeFormValues} defaultValue={tripInfo?.paymentId} />,
  },
];

  const next = useCallback(() => {
    setCurrent(current + 1);
  }, [current]);

  const prev = useCallback(() => {
    setCurrent(current - 1);
  }, [current]);


  useEffect(() => {
    dispatch(getVehicleById(id));
    dispatch(getBillPayments());
  }, [dispatch, id]);

  const isNextButtonDisabled = current === 1 && !!!tripInfo?.endPlace;


  const handleGoNextStep = current === steps.length - 1 ? () => {
    dispatch(billVehicle({
      ...tripInfo,
      vehicleId: +id,
      userId: user?.id,
    }));

    dispatch(uiSlice.actions.hideModal());
    dispatch(uiSlice.actions.clearModalParams());

    history.push('/');
  } : next;

  return <><Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className={styles.stepContainer}>{React.cloneElement(steps[current].content, { next, prev })}</div>
      <div className={styles.buttonSection}>
          <Button type="primary" onClick={handleGoNextStep} disabled={isNextButtonDisabled}>
            {mapButtonTitleByStep.get(current)}
          </Button>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>;
};