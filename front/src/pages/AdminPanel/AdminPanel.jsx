import React, { useCallback, useEffect } from 'react';
import { Typography, Table, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getVehiclesList } from '../../actions/vehiclesActions';
import { getVegiclesState } from '../../selectors/vehicles.selector';
import { vehicleTableColumns } from './helper';
import { VehicleForm } from './VehicleForm';
import { getControlsState } from '../../selectors/controls.selector';
import { getVehicleBrandList, getVehicleCountryList, getVehicleGenerationList, getVehiclesStatuses } from '../../actions/controlsActions';
import { AppstoreAddOutlined } from '@ant-design/icons';
import styles from './styles.module.less';
import { uiSlice } from '../../reducers/ui.reducer';
import { AddVehicleModal } from './AddVehicleModal';
import { MODALS } from '../../constants/modals.const';

export const AdminPanel = () => {
  const dispatch = useDispatch();
  const { vehicles } = useSelector(getVegiclesState);

  const { vehicleStatuses, vehicleBrands } = useSelector(getControlsState);

  useEffect(() => {
    dispatch(getVehiclesList());
    dispatch(getVehiclesStatuses());
    dispatch(getVehicleBrandList());
    dispatch(getVehicleGenerationList());
    dispatch(getVehicleCountryList());
  }, [dispatch]);


  const handleAddVehicle = useCallback(() => {
      dispatch(uiSlice.actions.showModal(MODALS.addVehicle));
  }, [dispatch]);


  const expandedRowRender = useCallback((record) => {
    return <VehicleForm vehicle={record} vehicleStatuses={vehicleStatuses} vehicleBrands={vehicleBrands}/>;
  }, [vehicleStatuses, vehicleBrands]);

  return <div>
    <Typography.Title className={styles.adminTitle} >Admin Panel</Typography.Title>
    <div className={styles.vehiclesSection}>
      <Typography.Title>Vehicles</Typography.Title>
      <Button type="primary" shape="circle" icon={<AppstoreAddOutlined />} size="large" onClick={handleAddVehicle} />
    </div>
    <Table columns={vehicleTableColumns} dataSource={vehicles} expandable={{ expandedRowRender }}/>
    <AddVehicleModal />
  </div>;
};
