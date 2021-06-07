import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../api';
import { LS_IS_AUTH_KEY, LS_TOKEN_KEY } from '../constants/common.const';



export const loginAction = createAsyncThunk('@auth/login', async (submitData) => {
  const { data } = await authApi.login(submitData);

  localStorage.setItem(LS_TOKEN_KEY, data.token);
  localStorage.setItem(LS_IS_AUTH_KEY, 'true');

  return data;
});