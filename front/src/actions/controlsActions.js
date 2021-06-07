import { createAsyncThunk } from '@reduxjs/toolkit';
import { controlsApi } from '../api';


export const getGenderControls = createAsyncThunk('@controls/get-gender-list', async () => {
  const { data } = await controlsApi.getGenderList();

  return data;
});

export const getUserCountiesList = createAsyncThunk('@controls/get-user-countries-list', async () => {
  const { data } = await controlsApi.getUserCountriesList();

  return data;
});

export const getVehiclesStatuses = createAsyncThunk('@controls/get-vehicles-status', async () => {
  const { data } = await controlsApi.getVehicleStatuses();

  return data;
})

export const getVehicleBrandList = createAsyncThunk('@controls/get-vehicle-statuses', async () => {
  const { data } = await controlsApi.getCarBrandsList();

  return data;
})

export const getVehicleGenerationList = createAsyncThunk('@controls/get-vehicle-generation', async () => {
  const { data } = await controlsApi.getCarGenerationList();

  return data;
})

export const getVehicleCountryList = createAsyncThunk('@controls/get-vehicle-countries', async () => {
  const { data } = await controlsApi.getCarCountries();

  return data;
})

export const getBillPayments = createAsyncThunk('@controls/get-bill-payments', async () => {
  const { data } = await controlsApi.getBillPayments();

  return data;
})
