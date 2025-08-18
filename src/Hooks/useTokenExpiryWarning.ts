import { useEffect, useCallback, useState } from 'react';
import { handleLogout } from '../Utils/logoutHandler';
import { apiRequest } from '../Redux/apiCalls';
import authService from '../Services/authServices';

function useTokenExpiryWarning() {
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const refreshToken = authService.getRefreshToken();
  const token = authService.getToken();
  const isTokenExpired = authService.isTokenExpired;
  const isTokenAboutExpired = authService.isTokenAboutExpired;

  const handleRefreshToken = async () => {
    setIsRefreshing(true);
    try {
      const response = await apiRequest.post('/login/refresh/token', { refreshToken });
      if (response.status === 200) {
        authService.setToken(JSON.stringify(response.data.accessToken));
        handleModalClose();
      }
      setIsRefreshing(false);
    } catch (error) {
      console.error('Error refreshing token:', error);
      setIsRefreshing(false);
      handleModalClose();
      handleLogout();
    }
  };

  const handleActivity = useCallback(() => {
    if (!token) {
      return;
    }

    if (isTokenExpired()) {
      handleLogout();
    } else if (isTokenAboutExpired()) {
      setShowWarningModal(true);
    }
  }, [token, isTokenExpired, isTokenAboutExpired]);

  useEffect(() => {
    const events = ['click', 'keydown', 'scroll'];

    events.forEach((event) => {
      window.addEventListener(event, handleActivity);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [handleActivity]);

  const handleModalConfirm = () => {
    setShowWarningModal(false);
    handleRefreshToken();
  };

  const handleModalCancel = () => {
    setShowWarningModal(false);
    handleLogout();
  };

  const handleModalClose = () => {
    setShowWarningModal(false);
  };

  return {
    isRefreshing,
    showWarningModal,
    handleModalConfirm,
    handleModalCancel,
    handleModalClose,
  };
}

export default useTokenExpiryWarning;
