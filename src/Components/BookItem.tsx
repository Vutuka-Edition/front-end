import React from 'react';
import { useTranslation } from 'react-i18next';
import { MoveUpRight } from 'lucide-react';

import type { Book } from '../Constants/books';

const BookItem: React.FC<{ book: Book }> = ({ book }) => {
  const { t } = useTranslation();
  return (
    <div className="group w-72 lg:w-64 2xl:w-75 hover:border-2 border-green-new rounded-lg transition-all duration-100">
      <img
        src={book.imageUrl}
        alt={book.title}
        className="h-96 w-full rounded-lg object-fit shadow hover:shadow-lg"
      />
      <div className="p-2 pt-4 flex flex-col flex-grow">
        <div className="mt-auto flex items-start justify-between">
          <div className="">
            <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{book.author}</p>
          </div>
          <p className="text-main-hover font-bold text-xl">{book.price}</p>
        </div>
        <button className="flex items-center justify-center font-semibold gap-3 text-green-new py-2 hover:text-main-hover transition">
          <span>{t('More Info')}</span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-main-hover group-hover:border-green-new group-hover:bg-gradient-to-br group-hover:from-main group-hover:to-main-hover rounded-full flex items-center justify-center p-1 sm:p-2 transition-all duration-300 shadow-sm group-hover:shadow-md">
            <MoveUpRight className="text-gray-500 group-hover:text-white w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BookItem;
