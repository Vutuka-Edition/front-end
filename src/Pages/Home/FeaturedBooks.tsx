import React from 'react';
import { useTranslation } from 'react-i18next';

import { books } from '../../Constants/books';
import BookItem from '../../Components/BookItem';

const FeaturedBooks: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{t('featured-books-title')}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('featured-books-description')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
        {books.slice(0, 4).map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
