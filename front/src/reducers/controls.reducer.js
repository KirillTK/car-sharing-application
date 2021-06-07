import { createSlice } from '@reduxjs/toolkit'
import { 
  getGenderControls,
  getUserCountiesList, 
  getVehiclesStatuses,
  getVehicleBrandList, 
  getVehicleGenerationList,
  getVehicleCountryList,
  getBillPayments,
} from '../actions/controlsActions';

const initialState = {
  genders: [],
  userCountries: [],
  vehicleStatuses: [],
  vehicleBrands: [],
  carGeneration: [],
  carCountries: [],
  paymentsMethod: [],
}

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(getGenderControls.fulfilled, (state, { payload }) => ({ ...state, genders: payload }))
    .addCase(getUserCountiesList.fulfilled, (state, { payload }) => ({ ...state, userCountries: payload }))
    .addCase(getVehiclesStatuses.fulfilled, (state, { payload }) => ({ ...state, vehicleStatuses: payload }))
    .addCase(getVehicleBrandList.fulfilled, (state, { payload }) => ({ ...state, vehicleBrands: payload }))
    .addCase(getVehicleGenerationList.fulfilled, (state, { payload }) => ({ ...state, carGeneration: payload }))
    .addCase(getVehicleCountryList.fulfilled, (state, { payload }) => ({ ...state, carCountries: payload }))
    .addCase(getBillPayments.fulfilled, (state, { payload }) => ({ ...state, paymentsMethod: payload }))
    }
});
