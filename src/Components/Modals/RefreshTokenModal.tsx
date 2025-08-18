import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from '../Spinner';

interface BookingModalProps {
  title: string;
  message: string;
  isLoading?: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const RefreshTokenModal: FC<BookingModalProps> = ({
  title,
  message,
  isLoading,
  onClose,
  onContinue,
}) => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-screen fixed bottom-0 left-0 right-0 top-0 z-50">
      <div className="h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-black/[0.5]"></div>
      <div
        data-testid="dialog"
        className="absolute top-32 left-0 right-0 mx-auto w-5/6 md:w-1/2 xl:w-1/3 max-h-[50%] rounded-lg bg-white text-black p-4 md:p-8"
      >
        <div className="flex justify-end">
          <button data-testid="close" className="text-2xl font-bold text-main" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center mb-4 font-bold text-xl md:text-3xl">{title}</h2>
          <p className="text-center mb-6 text-sm md:text-lg text-main font-bold">{message}</p>
          <button
            disabled={isLoading}
            className="w-full flex items-center justify-center md:w-1/2 px-4 py-2 text-yellow-extended font-bold bg-main hover:bg-main-hover rounded-xl"
            onClick={onContinue}
          >
            {isLoading ? <Spinner /> : t('continue')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefreshTokenModal;
