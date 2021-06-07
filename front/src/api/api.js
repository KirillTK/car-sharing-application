import axios from 'axios';
import { LS_TOKEN_KEY } from '../constants/common.const';


export class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_PREFIX,
    })

    this.api.interceptors.request.use((config) => {
      const token =localStorage.getItem(LS_TOKEN_KEY);

      if(token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    });
  }
}