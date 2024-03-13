"use client"

import Lottie from 'lottie-react';
import animationData from '../../../public/assets/loading blue.json';
import scrapeAndStoreProduct from '../api/scrapProduct/scrapAndStoreProduct';
import { FormEvent, useState } from 'react';
import { MdClear } from 'react-icons/md';
import '../styles/globals.css'; 



const isValidLink = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.endsWith('amazon') ||
      hostname.includes('amzn') ||
      hostname.includes('flipkart.com') ||
      hostname.includes('flipkart') ||
      hostname.endsWith('flipkart')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};


const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // State to control the visibility of the loading animation
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) return alert("Please provide a valid Amazon/Flipkart's product link");

    try {
      setIsLoading(true);
      setShowLoadingAnimation(true); // Show the loading animation

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setShowLoadingAnimation(false); // Hide the loading animation after the search is complete
    }
  };

  return (
    <form

      className="flex flex-wrap items-center justify-center"
      onSubmit={handleSubmit}
      style={{
        marginTop: '20px',
        width: '400px', // Set a specific width
      }}
    >
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        
        className="searchbar-input focus:outline-none px-4 py-2 inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        style={{
          border: '1px solid #ddd',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '5px',
          color: '#333',
          width: '100%', // Take full width
          transition: 'background-color 0.3s ease',
        }}
        
      />


      <button
        type="submit"
        className="searchbar-btn focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:focus:ring-yellow-900"
        disabled={searchPrompt === ''}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      
     

      {searchPrompt && (
        <button type="button" name="Search" onClick={() => setSearchPrompt('')} className="ml-2">
          <MdClear size={20} style={{ color: 'black' }}/>
        </button>
      )}
       {showLoadingAnimation && (
        <div className="w-40 h-40 m-[-32px]">
          <Lottie animationData={animationData} width={40} height={40} />
        </div>
      )}
    </form>
  );
};

export default Searchbar;
