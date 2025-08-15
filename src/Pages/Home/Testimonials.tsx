import React from 'react'
import { MoveUpRight } from "lucide-react";

import { reviews } from '../../Constants/Testimonials'
import ReviewCard from '../../Components/ReviewCard';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white flex flex-row items-center justify-center py-24 px-6 sm:px-12 lg:px-20 gap-8">
        <div className="basis-1/3">
          <h1 className="text-6xl font-semibold text-main mb-4">What the Readers are Saying</h1>
          <p className="text-gray-600 text-xl">We are extremely grateful for the feedback I receive from my readers.</p>
          <button className="group flex items-center justify-start font-semibold gap-3 text-green-new py-2 hover:text-main-hover transition">
            Write a Testimonial
            <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-main-hover group-hover:border-green-new group-hover:bg-gradient-to-br group-hover:from-main group-hover:to-main-hover rounded-full flex items-center justify-center p-1 sm:p-2 transition-all duration-300 shadow-sm group-hover:shadow-md">
              <MoveUpRight className="text-gray-500 group-hover:text-white w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300" />
            </div>
          </button>
        </div>
        <div className="basis-1/2">
          {reviews.slice(0, 2).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
    </section>
  )
}

export default Testimonials