import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/assets/loading blue.json';
import { MdClose } from 'react-icons/md';

interface ProductData {
  title1: string;
  price1: string;
  image1: string;
  des1: string;
  rating1: string;
  url1: string;
}

function MyComponent() {
  const [data, setData] = useState<ProductData | null>(null);
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleBuyNowClick = () => {
    window.open(data?.url1, '_blank');
  };

  const fetchData = async (searchPrompt: string) => {
    try {
      setIsLoading(true);
      setShowLoadingAnimation(true);
      
      const response = await fetch(`/api/scrapProduct/displayRequest?url=${searchPrompt}`);
      const jsonData = await response.json();
      
      setData(jsonData.allData);
      setSearchPrompt('');
      setError(null);
      setShowDialog(true); // Display dialog after fetching data
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
      setShowLoadingAnimation(false);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData(searchPrompt);
        }}
        className="flex flex-wrap items-center justify-center"
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
            <MdClose size={20} style={{ color: 'black' }}/>
          </button>
        )}
        
        {showLoadingAnimation && (
          <div className="w-40 h-40 m-[-32px]">
            <Lottie animationData={animationData} width={40} height={40} />
          </div>
        )}
      </form>
        
      {error && <div>Error: {error}</div>}
      
      {data && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${showDialog ? '' : 'hidden'}`}>
          <div className="absolute bg-black opacity-50 inset-0"></div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 max-w-lg z-50 overflow-hidden">
            <div className="flex justify-end">
              <button onClick={() => setShowDialog(false)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <MdClose size={24} />
              </button>
            </div>
            <div className="flex justify-center">
              <img src={data.image1} alt={data.title1} className="w-32 h-32 object-contain rounded-lg" />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{data.title1}</h2>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-200">Price: ₹ {data.price1}</p>
              <div className="flex items-center mb-2">
                {(data.rating1)}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Description: {data.des1}</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg" onClick={handleBuyNowClick}>
                Best Buying Link
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyComponent;
