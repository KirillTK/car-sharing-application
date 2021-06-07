import { createSlice } from '@reduxjs/toolkit'
import { getVehiclesList, getVehicleById  } from '../actions/vehiclesActions';
import { getCurrentVehicle, finishCurrentRide, getBillUserHistory } from '../actions/billActions';

const initialState = {
  isLoading: false,
  vehicles: [],
  vehicle: null,
  currentCar: null,
  history: [],
}

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getVehiclesList.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getVehiclesList.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        vehicles: payload,
      }))
      .addCase(getVehicleById.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getVehicleById.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        vehicle: payload,
      }))
      .addCase(getCurrentVehicle.fulfilled, (state, { payload }) => ({
        ...state,
        currentCar: payload,
      }))
      .addCase(finishCurrentRide.fulfilled, (state) => ({
        ...state,
        currentCar: null,
      }))
      .addCase(getBillUserHistory.fulfilled, (state, { payload }) => ({
        ...state,
        history: payload,
      }))
    }
  });
  