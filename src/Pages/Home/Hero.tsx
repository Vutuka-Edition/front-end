import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-1 h-full flex items-center justify-start">
      <div className="w-full flex flex-col items-center md:items-start justify-center gap-8 px-4 md:px-20">
        <div className="flex flex-col gap-8 w-full items-center md:items-start">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">{t('welcome')}</h1>
          <p className="text-gray-500 text-sm md:text-lg">{t('welcome-description')}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center md:justify-start">
          <Link
            to="/register"
            className="px-16 py-3 text-lg font-semibold rounded-lg bg-main text-white hover:bg-main-hover transition-colors"
          >
            {t('get-started')}
          </Link>
          <Link
            to="/books"
            className="px-16 py-3 text-lg font-semibold rounded-lg border border-main text-main transition-colors"
          >
            {t('buy-books')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
