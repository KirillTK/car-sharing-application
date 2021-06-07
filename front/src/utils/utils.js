import { LS_IS_AUTH_KEY } from '../constants/common.const';

export const getAuthStateFromLS = () => localStorage.getItem(LS_IS_AUTH_KEY);
