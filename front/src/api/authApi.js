import { Api } from './api';

class AuthApi extends Api {
  login = ({ email, name, password }) => {
    return this.api.post('auth/login', {
      user: {
        email,
        password,
      }
    });
  }

  signUp = ({ email, name, password }) => {
    return this.api.post('auth/signup', { 
      email,
      name,
      password,
      roleId: 1,
      gender: 1,
    });
  }
}

export default new AuthApi();