import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../api';
import { LS_IS_AUTH_KEY, LS_TOKEN_KEY } from '../constants/common.const';



export const loginAction = createAsyncThunk('@auth/login', async (submitData) => {
  const { data } = await authApi.login(submitData);

  localStorage.setItem(LS_TOKEN_KEY, data.token);
  localStorage.setItem(LS_IS_AUTH_KEY, 'true');

  return data;
});


export const signUpAction = createAsyncThunk('@auth/signup', async(submitData) => {
  const { data } = await authApi.signUp(submitData);

  localStorage.setItem(LS_TOKEN_KEY, data.token);
  localStorage.setItem(LS_IS_AUTH_KEY, 'true');

  return data;
});


export const getCurrentUserAction = createAsyncThunk('@auth/get-current-user', async () => {
  const { data } = await authApi.getCurrentUser();

  return data;
});


export const logOut = createAsyncThunk('@auth/logout', () => {
  localStorage.removeItem(LS_TOKEN_KEY);
  localStorage.removeItem(LS_IS_AUTH_KEY);

  return true;
});