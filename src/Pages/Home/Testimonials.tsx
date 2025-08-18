import React from 'react';
import { useTranslation } from 'react-i18next';
import { MoveUpRight } from 'lucide-react';

import { reviews } from '../../Constants/Testimonials';
import ReviewCard from '../../Components/ReviewCard';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white flex flex-col lg:flex-row items-center justify-center py-24 px-4 md:px-20 gap-8">
      <div className="2xl:basis-1/3">
        <h1 className="text-4xl md:text-6xl font-semibold text-main mb-4">{t('testimonials-title')}</h1>
        <p className="text-gray-600 text-md md:text-xl">
          {t('testimonials-description')}
        </p>
        <button className="group flex items-center justify-start font-semibold gap-3 text-green-new py-2 hover:text-main-hover transition">
          {t('Write a Testimonial')}
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-main-hover group-hover:border-green-new group-hover:bg-gradient-to-br group-hover:from-main group-hover:to-main-hover rounded-full flex items-center justify-center p-1 sm:p-2 transition-all duration-300 shadow-sm group-hover:shadow-md">
            <MoveUpRight className="text-gray-500 group-hover:text-white w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300" />
          </div>
        </button>
      </div>
      <div className="2xl:basis-1/2">
        {reviews.slice(0, 2).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
