import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import { billApi } from '../api';



export const billVehicle = createAsyncThunk('@bills/bill-vehicle', async (billValues, thunk) => {
  try {
    const { data } = await billApi.billCar(billValues);

    console.log(data);
  
    message.success('Processing complete!');
  
    return data;
  } catch(error) {
    return thunk.rejectWithValue(error);
  }
});

export const getCurrentVehicle = createAsyncThunk('@bills/get-current-car', async (userId) => {
  const { data } = await billApi.getYouCar(userId);

  return data;
});

export const finishCurrentRide = createAsyncThunk('@bills/finish-current-ride', async ({ billId, vehicleId }) => {
  await billApi.finishRide(billId, vehicleId);
});


export const getBillUserHistory = createAsyncThunk('@bills/user-history', async(userId) => {
  const { data } = await billApi.getBillUserHistory(userId);

  return data;
});
