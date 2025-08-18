import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import authService from '../Services/authServices';

const ProtectedAuth: FC = () => {
  const token = authService.getToken();
  return !token ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default ProtectedAuth;
