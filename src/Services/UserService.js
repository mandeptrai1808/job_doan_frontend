import axios from 'axios';
import { BASE_URL } from './configAPI';

export const UserService = {
    Login: (_dataLogin) => {
      return axios({
        url: `${BASE_URL}/users/login`,
        data: _dataLogin,
        method: 'post'
      })
    },
    Register: (_dataRegister) => {
      return axios({
        url: `${BASE_URL}/users/`,
        data: _dataRegister,
        method: 'post'
      })
    }
}