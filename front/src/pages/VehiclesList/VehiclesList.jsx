import React, { useCallback, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getVehiclesList } from '../../actions/vehiclesActions';
import { getVegiclesState } from '../../selectors/vehicles.selector';
import { getAuthState } from '../../selectors/auth.selector';
import { useHistory } from 'react-router';
import { ROUTER_PATHS } from '../../constants/routerPaths.const';
import { uiSlice } from '../../reducers/ui.reducer';
import { MODALS } from '../../constants/modals.const';
import { AuthModal } from '../../components/AuthModal/AuthModal';

const { Meta } = Card;

export const VehiclesList = () => {
  const history = useHistory();
  const { isAuthorized } = useSelector(getAuthState);
  const { vehicles } = useSelector(getVegiclesState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehiclesList());
  }, [dispatch]) 

  console.log(vehicles, 'vehicles');


  const handleOrderCar = useCallback((carId) => () => {
    if(isAuthorized) {
      history.push(`order/${carId}`);
      return;
    }

    dispatch(uiSlice.actions.showModal(MODALS.auth));
    dispatch(uiSlice.actions.setModalParams({ id: carId }));
  },[isAuthorized, history, dispatch]);

  return <Row gutter={[16, 16]}>
    <AuthModal />
    {vehicles.map( ({ id, image, name, isFree, price, brand: { name: brandName } }) => (
    <Col span={6} key={id}>
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt={name}
        src={image}
      />
    }
    actions={[
      isFree && <CheckCircleTwoTone twoToneColor="#52c41a" />,
      <div>{price}$ per hour</div>,
      <HeartTwoTone twoToneColor="#eb2f96" onClick={handleOrderCar(id)} />,
    ]}
  >
    <Meta title={brandName} description={name} />
  </Card></Col>))}
  </Row>;
};