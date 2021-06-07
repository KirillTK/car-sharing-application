import { createSlice } from '@reduxjs/toolkit'
import { loginAction } from '../actions/authActions';
import { getAuthStateFromLS } from '../utils/utils';

const initialState = {
  isAuthorized: !!getAuthStateFromLS(),
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder.addCase(loginAction.fulfilled, (state, { payload }) => ({ ...state, user: payload, isAuthorized: true  }))
});
