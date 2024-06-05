'use client'

import React, { useState } from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { LuWheat } from "react-icons/lu";
import { FiArrowRightCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";

interface Review {
  review: string;
  user: string;
  designation: string;
}

const reviews: Review[] = [
  {
    review: "Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh erat.",
    user: "Ricky Mortin",
    designation: "Business Owner"
  },
  {
    review: "Another review from a satisfied client.",
    user: "Jane Doe",
    designation: "Entrepreneur"
  },
  {
    review: "This service is amazing! Highly recommend.",
    user: "John Smith",
    designation: "Freelancer"
  }
];

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setIsAnimating(false);
    }, 300); // Duration of the animation
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300); // Duration of the animation
  };

  const { review, user, designation } = reviews[currentReviewIndex];

  return (
    <div className='h-full py-24 w-full z-20 px-4 md:px-12 lg:px-48 bg-gradient-to-t from-[#FCD6E1] to-white'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-24'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          REVIEWS OF OUR CLIENTS
        </h1>
      </div>

      {/* Reviews Card */}
      <div className='flex flex-col p-10 gap-10 w-full min-h-max bg-gradient-to-tr from-[#FF91B3] to-[#EF346E] rounded-lg'>
        <div className='flex justify-between items-center'>
          <BiSolidQuoteLeft className='size-10 text-[#7C0026]' />
          <LuWheat className='size-10 text-white' />
        </div>

        {/* Reviews */}
        <div className={`pt-5 transition-all duration-300 transform ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className='text-4xl font-bold text-white'>
            {review}
          </h1>
        </div>

        <div className='flex justify-between items-center'>
          {/* User name and Designation */}
          <h3 className='text-xl font-bold text-black'>
            {user}, <span className='italic text-[#7C0026]'>{designation}</span>
          </h3>
          <div className='flex items-center'>
            <FiArrowLeftCircle onClick={handlePrevious} className='cursor-pointer size-10 text-white' />
            <FiArrowRightCircle onClick={handleNext} className='cursor-pointer size-10 text-white' />
          </div>
        </div>
      </div>
      {/* Reviews Card */}
    </div>
  );
}
