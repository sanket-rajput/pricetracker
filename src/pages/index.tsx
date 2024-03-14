import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Footer from './components/footer';
import HeroCarouselFull from './components/HeroCarouselFull';
import PriceTrackerAccessSteps from './components/exeuationSteps';
import MyComponent from './displayProduct/display';
import HomeAnim from '../../public/assets/home anim.json';
import Head from 'next/head';

import Navbar from './components/Navbar';
import animationData from '../../public/assets/loading blue.json';
import SectionBelowNavbar from './components/categorise';
import ProductCard from './components/ProductCard';




const Home = () => {



  useEffect(() => {

  }, []);

  const id = 2;

  return (
    <>
    <Head>
        <title>Price Tracker</title>
        <meta name="description" content="Track prices effortlessly, save money smartly, with real-time notifications " />
      </Head>
      <section className="flex-row flex min-h-screen text-white scrollbar-hide bg-gradient-to-b z-0 flex flex-col from-purple-800 to-purple-300 Poppins">
        <svg className="absolute w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1685.86 387.16"><polygon points="1683.97 0.5 1005.34 386.66 645.6 386.66 1.81 0.5 1683.97 0.5" fill="none" stroke="#513068"></polygon><path d="M282.17.5,705.55,386.66" fill="none" stroke="#513068"></path><path d="M562.53.5l203,386.16" fill="none" stroke="#513068"></path><path d="M842.89.5,825.47,386.66" fill="none" stroke="#513068"></path><path d="M1123.25.5,885.43,386.66" fill="none" stroke="#513068"></path><path d="M1403.61.5,945.39,386.66" fill="none" stroke="#513068"></path><path d="M1033.64,370.69h-414" fill="none" stroke="#513068"></path><path d="M1071.64,349.69h-488" fill="none" stroke="#513068"></path><path d="M1125.64,318.69h-593" fill="none" stroke="#513068"></path><path d="M1208.64,270.69h-756" fill="none" stroke="#513068"></path></svg>

        <div className='animate__animated   animate__slideInUp' >
          <div style={{ paddingTop: '60px' }}>
          </div>
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="animate-marquee select-none text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl rad-text-shadow pt-4 md:pt-12 font-display  leading-none sm:text-4xl sm:pt-2 sm:mb-4 md:mb-0">
              Unlock{' '}

              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block">
                <span className="roboto relative text-white">
                  savings,
                </span>
              </span> shop smarter!
            </h1>
            <p className="text-16xl lg:text-3xl text-lg sm:text-sm  rad-text-shadow pt-4 md:pt-12 font-display font-bold italic leading-none xl:text-3xl 2xl:text-4xl text drop-shadow-[2px_2px_var(--tw-shadow-color)] ">
              {/* hello */}
            </p>
            <div className="w-80 h-80 items-center	 m-[-42px]"> {/* Adjust the width and height classes */}
            <Lottie animationData={HomeAnim} />
            </div>
            <MyComponent /> 
            {/* <div className=x`"w-40 h-40">
          <Lottie animationData={animationData} />
        </div>          */}
        
          </div>
        </div>
      </section>

      <section className='min-w-full m-0 p-0'>
        <PriceTrackerAccessSteps />
      </section>

      <section className="sm:px-6 md:px-8 lg:px-12 xl:px-16 text-white bg-blue-100">
        <div className='min-w-full p-0 sm:p-6 md:p-8 lg:p-12 xl:p-16 pt-4 pb-14 sm:mt-6 sm:mb-10 md:mb-16 lg:mb-20 xl:mb-24'>
          <HeroCarouselFull />
        </div>
      </section>

      <footer>
        <Footer/>
      </footer>

    </>
  );
};

export default Home;

