import React from "react";

import { books } from '../../Constants/books'

const BestSeller: React.FC = () => {
  return (
    <section className="bg-gray-50 pt-24 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            The Latest Bestseller <br />
            <span className="text-green-new">"{books[0].title}"</span>
          </h2>
          <h3 className="text-gray-700 font-semibold mb-4">
            Why Read a Book on Personal Branding?
          </h3>
          <p className="text-gray-600 mb-4">
            Even those who might not realize it, have a brand. We all do. And we've been cultivating ours for ages with the help of our work and our social media.
          </p>
          <p className="text-gray-600 mb-4">
            But why continue doing it unconsciously when you can approach it professionally and make the most out of it? This is especially critical these days when the stakes are much higher than before. Everyone who wants to be successful needs to not only excel in what they do but to convince the others.
          </p>
          <p className="text-gray-600 mb-6">
            I believe that everyone can benefit from conscious personal branding. I've written this book to help the readers pave the path for their personal brand success. Learn how to present, promote yourself like world-class marketing professionals.
          </p>
          <p className="text-green-600 font-medium">
            On sale since May 20, 2024
          </p>
        </div>

        {/* Book Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={books[0].imageUrl}
            alt={books[0].title}
            className="w-64 sm:w-80 lg:w-96 transform rotate-3 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BestSeller;