import React from 'react';
import { useTranslation } from 'react-i18next';

import aboutItems from '../../Constants/AboutItems';
import booksImg from '../../assets/images/books.jpg';
import readerImg from '../../assets/images/reader.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 lg:py-32 px-4 md:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:hidden 2xl:flex flex-1 relative w-[90%]">
          <img
            src={booksImg}
            alt="Vutuka Edition Library"
            className="rounded-2xl shadow-lg w-full lg:h-[400px] 2xl:h-full object-cover"
          />
          <img
            src={readerImg}
            alt="Stack of books"
            className="absolute -bottom-6 -right-6 w-32 md:w-64 h-32 md:h-64 rounded-xl shadow-md object-cover border-4 border-white"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('About-title')} <span className="text-main-hover">Vutuka Edition</span>
          </h2>
          <p className="text-sm md:text-md xl:text-lg text-gray-600 leading-relaxed mb-2 text-justify">
            {t('About-description-one')}
          </p>
          <p className="text-sm md:text-md xl:text-lg text-gray-600 leading-relaxed mb-8 text-justify">
            {t('About-description-two')}
          </p>

          {/* Feature list */}
          <div className="grid sm:grid-cols-3 gap-6">
            {aboutItems.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text:lg xl:text-2xl font-semibold text-gray-800 mb-2">{item.icon} {t(item.title)}</h3>
                <p className="text-gray-600 text-sm">{t(item.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
