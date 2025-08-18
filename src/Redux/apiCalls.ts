import axios from 'axios';
import type { Dispatch } from 'redux';

import { baseURL } from '../Utils/constants';

import AuthService from '../Services/authServices';
import { navigate } from '../Services/navigateService';
import {
  userLoginStart,
  userLoginSuccess,
  userLoginFailure,
  updateOTPStatus,
} from './currentUserRedux';

export const apiRequest = axios.create({ baseURL: baseURL });

apiRequest.interceptors.request.use(async (config: any) => {
  const token = AuthService.getToken();
  const isTokenExpired = AuthService.isTokenExpired();
  if (token && isTokenExpired) {
    AuthService.removeToken();
    navigate('/auth/login');
  } else if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// LOGIN USER
export const userLogin = async (dispatch: Dispatch, user: { email: string; password: string }) => {
  dispatch(userLoginStart());
  try {
    const res = await apiRequest.post('/auth/login', { ...user }, { timeout: 30000 });
    if (res.status === 202) {
      dispatch(userLoginFailure({ type: null, message: '' }));
      return res.data.accessToken;
    } else if (res.status === 201) {
      dispatch(updateOTPStatus(true));
      AuthService.setTemporaryToken(res.data.accessToken.access_token);
      return false;
    } else {
      dispatch(userLoginSuccess(res.data.data));
      // dispatch(updatePreferences(res.data.preferences))
      AuthService.setToken(JSON.stringify(res.data.accessToken));
      // AuthService.setLanguage(res.data.preferences?.languages || 'english')
      return res.data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      dispatch(
        userLoginFailure({
          type: 'error',
          message: error.response.data.message,
        })
      );
    } else {
      dispatch(userLoginFailure({ type: 'error', message: error.message }));
    }
    setTimeout(() => {
      dispatch(userLoginFailure({ type: null, message: '' }));
    }, 5000);
    return false;
  }
};
