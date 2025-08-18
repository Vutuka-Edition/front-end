import { store } from '../Redux/store.ts';
import AuthService from '../Services/authServices.ts';
import { navigate } from '../Services/navigateService.ts';
import { userLogoutSuccess } from '../Redux/currentUserRedux.ts';

export const handleLogout = () => {
  const dispatch = store.dispatch;
  dispatch(userLogoutSuccess());
  AuthService.removeToken();
  navigate('/');
};
