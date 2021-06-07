import { LS_IS_AUTH_KEY } from '../constants/common.const';

export const getAuthStateFromLS = () => localStorage.getItem(LS_IS_AUTH_KEY);


export const isCustomer = role => role === 'customer';

export const isAdmin = role => role === 'admin';

export const getDateFromString = date => {
  const [ dateFromString ] = date.match(/\d{4}-\d{2}-\d{2}/gi);;

  return dateFromString.replaceAll('-', '.');

}
