import { createSlice } from '@reduxjs/toolkit'
import { loginAction, signUpAction, getCurrentUserAction, logOut } from '../actions/authActions';
import { getAuthStateFromLS } from '../utils/utils';

const initialState = {
  isAuthorized: !!getAuthStateFromLS(),
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginAction.fulfilled, (state, { payload: { userDb, token } }) => ({ ...state, user: userDb, token, isAuthorized: true  }))
    .addCase(signUpAction.fulfilled, (state, { payload: { user, token } }) => ({ ...state, user, token, isAuthorized: true  }))
    .addCase(getCurrentUserAction.fulfilled, (state, { payload }) => ({ ...state, user: payload, isAuthorized: true  }))
    .addCase(logOut.pending, () => initialState)
  }
});
