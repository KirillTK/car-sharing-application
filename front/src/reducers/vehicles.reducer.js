import { createSlice } from '@reduxjs/toolkit'
import { getVehiclesList, getVehicleById } from '../actions/vehiclesActions';

const initialState = {
  isLoading: false,
  vehicles: [],
  vehicle: null,
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
    }
  });
  