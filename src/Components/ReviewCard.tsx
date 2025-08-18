import React from 'react';

import type { Review } from '../Constants/Testimonials';

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="rounded-xl transition flex flex-col">
      <div className="flex items-center mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-24 md:w-32 h-24 md:h-32 border-4 border-gray-300 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800">{review.name}</h3>
          <div className="flex mt-1">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`w-3 md:w-4 h-3 md:h-4 ${i < review.rating ? 'text-green-700' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.946c.3.922-.755 1.688-1.54 1.118l-3.356-2.44a1 1 0 00-1.175 0l-3.356 2.44c-.784.57-1.838-.196-1.539-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.044 9.372c-.784-.57-.38-1.81.588-1.81h4.149a1 1 0 00.951-.69l1.286-3.945z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 text-sm md:text-lg flex-grow text-justify">{review.comment}</p>
          <p className="text-green-400 text-xs md:text-sm mt-2">{review.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
