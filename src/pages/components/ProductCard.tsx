"use client"
// ProductCard.tsx
import React from 'react';

interface Product {
  image: string;
  title: string;
  platform: string;
  price: number;
  ratings: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, title, platform, price, ratings } = product;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">Platform: {platform}</p>
        <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
        <div className="flex items-center">
          <svg
            className="fill-current text-gray-500 w-4 h-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
          <p className="text-gray-700">{ratings}</p>
        </div>
        {/* Button with styling to trigger onScrape callback */}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
           // Call onScrape function directly without passing the title as a parameter
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
