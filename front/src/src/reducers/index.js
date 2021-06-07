import { combineReducers } from '@reduxjs/toolkit';
import { vehiclesSlice } from './vehicles.reducer';
import { authSlice } from './auth.reducer';
import { uiSlice } from './ui.reducer';
import { controlsSlice } from './controls.reducer';


export const rootReducer =  combineReducers({
  vehicles: vehiclesSlice.reducer,
  auth: authSlice.reducer,
  ui: uiSlice.reducer,
  controls: controlsSlice.reducer,
});
