import { Typography, Card, Row, Col } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBillUserHistory } from '../../actions/billActions';
import { getAuthState } from '../../selectors/auth.selector';
import { getVegiclesState } from '../../selectors/vehicles.selector';
import { getDateFromString } from '../../utils/utils';


const { Meta } = Card;

export const HistoryRecors = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(getAuthState);
  const { history } = useSelector(getVegiclesState);


  const renderHistory = useCallback(() => {
    return history.map( bill => {
      const { vehicle, payment, totalCost, endPlace, createdAt } = bill;

      return <Col xs={6}><Card
      style={{ width: 300, margin: '0 auto' }}
      cover={
        <img
          alt={vehicle.name}
          src={vehicle.image}
          style={{ maxHeight: 155 }}
        />
      }
      actions={[
        <div>Cost: {totalCost}$</div>,
      ]}
    >
      <Meta title={vehicle.name} description={<>
      <p>End place: {endPlace}</p>
      <p>Paymentys: {payment.method}</p>
      <p style={{ fontWeight: 'bold'}}>{getDateFromString(createdAt)}</p>
      </>} />
    </Card></Col>
    })
  }, [history]);

  useEffect(() => {
    if(user?.id) {
      dispatch(getBillUserHistory(user.id));
    }
  }, [dispatch, user]);


  return history.length ? 
  <Row gutter={[16,16]}>
  {renderHistory()}
  </Row> : 
  <Typography.Title level={2}>No History</Typography.Title>;
}
