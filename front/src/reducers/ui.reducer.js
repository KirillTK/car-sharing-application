import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeModal: null,
  modalParams: {},
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showModal: (state, { payload }) => ({ ...state, activeModal: payload }),
    hideModal: (state) => ({ ...state, activeModal: null }),
    setModalParams: (state, { payload }) => ({ ...state, modalParams: payload }),
    clearModalParams: (state) => ({ ...state, modalParams: null }),
  },
});
