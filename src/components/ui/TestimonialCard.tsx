'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  review: {
    quote: string;
    name: string;
    role: string;
  };
}

export function TestimonialCard({ review }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 150;
  const isLong = review.quote.length > maxLength;

  const displayText = isExpanded ? review.quote : isLong ? `${review.quote.slice(0, maxLength).trim()}...` : review.quote;

  return (
    <div className='bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full'>
      <div>
        <div className='flex text-[#ffb800] space-x-1 mb-4 sm:mb-6'>
          {[...Array(5)].map((_, j) => (
            <Star key={j} className='w-5 h-5 fill-current' />
          ))}
        </div>
        <p className={`text-gray-600 text-lg italic ${isLong ? 'mb-2' : 'mb-8'}`}>&quot;{displayText}&quot;</p>
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='text-(--brand-orange) font-medium text-sm hover:underline focus:outline-none mb-6 cursor-pointer text-left inline-block'
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
      <div className='mt-auto pt-4'>
        <h4 className='font-bold text-gray-900 text-lg'>{review.name}</h4>
        <p className='text-sm text-gray-400'>{review.role}</p>
      </div>
    </div>
  );
}
