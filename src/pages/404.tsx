// not-found.tsx
"use client"

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

import animationData from '../../public/assets/404 Anim.json';




const ErrorPage = () => {
  return (
    <div className="not-found h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">But don't worry, you can find plenty of other things on our homepage.</p>

          {/* <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
            Back to homepage
          </button> */}
          
        </div>

        <div className="w-2/6 h-2/6">
        <Lottie animationData={animationData}/>
        </div>
      </div>
      
    </div>
  );
};

export default ErrorPage;