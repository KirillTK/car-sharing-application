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

export const updateVehicle = createAsyncThunk('@vehicles/update-vehicle-by-id', async ({ id, ...formValues}, thunkAPI) => {
  await vehiclesApi.updateVehicleById(id, formValues)

  thunkAPI.dispatch(getVehiclesList());
});


export const addVehicle = createAsyncThunk('@vehicles/update-vehicle-by-id', async (vehicle, thunkAPI) => {
  await vehiclesApi.addVehicle(vehicle);

  thunkAPI.dispatch(getVehiclesList());
});


export const getCurrentUserCar = createAsyncThunk('@vehicles/get-current-car', async (userId) => {

  const { data } = await vehiclesApi.getYouCar(userId);

  return data;
});