import { createAsyncThunk } from '@reduxjs/toolkit';
import { vehiclesApi } from '../api';



export const getVehiclesList = createAsyncThunk('@vehicles/get-list', async () => {
  const { data } = await vehiclesApi.getVehiclesList();

  return data;
});

export const getVehicleById = createAsyncThunk('@vehicles/get-vehicle-by-id', async (id) => {
  const { data } = await vehiclesApi.getVehcileById(id);

  return data;
});