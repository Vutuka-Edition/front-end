import React from 'react'
import { MoveUpRight } from "lucide-react";

import type { Process } from '../Constants/HowItWorksItems';

const ProcessCard: React.FC<{ item: Process }> = ({ item }) => {
  return (
    <div className='group h-[280px] sm:h-[320px] md:h-[350px] flex flex-col justify-between p-4 sm:p-6 rounded-2xl sm:rounded-4xl border-2 border-main-hover bg-gradient-to-br from-white via-gray-50 to-white hover:bg-gradient-to-br hover:from-white hover:via-green-new-hover hover:to-white hover:border-green-new-hover transition-all duration-500 shadow-soft hover:shadow-medium'>
      <div className="flex flex-col items-start">
        <div className="w-10 h-10 sm:w-12 sm:h-12 p-2 flex items-center justify-center rounded-full bg-gradient-to-br from-green-new-hover to-green-new transition-all duration-500 shadow-sm">
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:text-accent-700 transition-colors duration-300" />
        </div>
        <h3 className='text-lg sm:text-xl md:text-2xl heading-3 mt-3 sm:mt-4 text-neutral-900 group-hover:text-black transition-colors duration-300'>{item.title}</h3>
        <p className='text-start text-gray-500 group-hover:text-gray-700 text-xs sm:text-sm mt-2 leading-relaxed font-myriad'>{item.description}</p>
      </div>
      <div className="flex items-center justify-between mt-3 sm:mt-4 w-full">
        {item.images && (
            <div className='flex items-center'>
            {item.images.map((image: string | { src: string; alt?: string }, index: number) => (
              <img
                key={index}
                src={typeof image === 'string' ? image : image.src}
                alt={typeof image === 'string' ? '' : image.alt ?? ''}
                className='w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full bg-gradient-to-br from-main to-green-new border-2 border-white shadow-sm -ml-1 sm:-ml-2 group-hover:from-accent-200 group-hover:to-accent-300 transition-all duration-300'
              />
            ))}
          </div>
        )}
        {item.tagline && (
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 font-myriad">
            {item.tagline.map((line: string, index: number) => (
                <span key={index} className="font-medium">#{line}</span>
            ))}
          </div>
        )}
        <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 font-myriad">{item.text}</p>
        <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-main-hover group-hover:border-green-new group-hover:bg-gradient-to-br group-hover:from-main group-hover:to-main-hover rounded-full flex items-center justify-center p-1 sm:p-2 transition-all duration-300 shadow-sm group-hover:shadow-md">
          <MoveUpRight className="text-gray-500 group-hover:text-white w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300" />
        </div>
      </div>
    </div>
  )
}

export default ProcessCard