import React, { useCallback, useEffect } from 'react';
import { Card, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentVehicle, finishCurrentRide } from '../../actions/billActions';
import { getAuthState } from '../../selectors/auth.selector';
import { getVegiclesState } from '../../selectors/vehicles.selector';



const { Meta } = Card;

export const CurrentCar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(getAuthState);
  const { currentCar } = useSelector(getVegiclesState);


  useEffect(() => {
    if(user?.id) {
      dispatch(getCurrentVehicle(user.id));
    }
  }, [user?.id, dispatch]);

  const handleFinishRide = useCallback(() => {
    dispatch(finishCurrentRide({
      billId: currentCar?.id,
      vehicleId: currentCar?.vehicleId,
    }));
  }, [dispatch, currentCar]);

  const renderCurrentCar = useCallback(() => {
    const { vehicle, payment, totalCost, endPlace } = currentCar;

    return <Card
    style={{ width: 300, margin: '0 auto' }}
    cover={
      <img
        alt={vehicle.name}
        src={vehicle.image}
      />
    }
    actions={[
      <div>Cost: {totalCost}$</div>,
      null,
      <div onClick={handleFinishRide}>Finish Ride</div>,
    ]}
  >
    <Meta title={vehicle.name} description={<>
    <p>End place: {endPlace}</p>
    <p>Paymentys: {payment.method}</p>
    </>} />
  </Card>
  }, [currentCar, handleFinishRide]);

  return currentCar ? 
  renderCurrentCar() : 
  <Typography.Title style={{ margin: '0 auto'}} level={4}>
    No Car
  </Typography.Title>;
}
