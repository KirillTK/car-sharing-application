import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicleById } from '../../actions/vehiclesActions';
import { getVegiclesState } from '../../selectors/vehicles.selector';


export const Order = ({ match: { params: { id }}}) => {
  const dispatch = useDispatch();
  const { vehicle } = useSelector(getVegiclesState);

  useEffect(() => {
    dispatch(getVehicleById(id));
  }, [dispatch, id]);

  return vehicle ? <div>Order</div> : null;
};