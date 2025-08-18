import React from 'react';
import { partners } from '../../Constants/partners';

const Partners: React.FC = () => {
  return (
    <div className="py-6 sm:py-8 border-t border-gray-200 mt-4 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center mr-12 lg:mr-32"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Partners;
