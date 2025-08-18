import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AppRoutes from './Routes';
import useTokenExpiryWarning from './Hooks/useTokenExpiryWarning';
import RefreshTokenModal from './Components/Modals/RefreshTokenModal';

const App: React.FC = () => {
  const { t } = useTranslation();
  const { isRefreshing, showWarningModal, handleModalConfirm, handleModalCancel } =
    useTokenExpiryWarning();

  return (
    <BrowserRouter>
      <AppRoutes />
      {showWarningModal && (
        <RefreshTokenModal
          title={t('session-expiry')}
          message={t('session-expiry-description')}
          isLoading={isRefreshing}
          onContinue={handleModalConfirm}
          onClose={handleModalCancel}
        />
      )}
    </BrowserRouter>
  );
};

export default App;
