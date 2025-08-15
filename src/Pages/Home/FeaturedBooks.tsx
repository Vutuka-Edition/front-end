import React from "react";

import { books } from '../../Constants/books'
import BookItem from "../../Components/BookItem";

const FeaturedBooks: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Featured Books for Sale
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our latest collection of inspiring reads from talented
          authors across Africa and beyond. Available in both print and digital
          formats.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.slice(0, 4).map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
