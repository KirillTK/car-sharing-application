import { Api } from './api';
import { USER_ROLES } from '../constants/userRoles.const';

class AuthApi extends Api {
  login = ({ email, name, password }) => {
    return this.api.post('auth/login', {
      user: {
        email,
        password,
      }
    });
  }

  signUp = (values) => {
    return this.api.post('auth/signup', {
        ...values,
        roleId: USER_ROLES.customer,
    });
  }

  getCurrentUser = () => {
    return this.api.get('auth/current');
  }
}

export default new AuthApi();