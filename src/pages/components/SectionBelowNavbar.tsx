import React from 'react';
import Link from 'next/link';
import { cursorTo } from 'readline';

const SectionBelowNavbar = () => {
  return (
    <div>
      <div>

        <Link href="/" className=" gap-3 shd m-4 hover:text-yellow-500 ">
          <button >Phones</button>
        </Link>
        <Link href="/" className=" shd gap-5 m-4 shd hover:text-yellow-500">
          <button >Laptops </button>
        </Link>
        <Link href="/" className=" gap-1  m-4 shd  hover:text-yellow-500">
          <button >Watches </button>
        </Link>
        <Link href="/about" className=" gap-1  m-4 shd  hover:text-yellow-500">
          <button >About Us</button>
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#172a45',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '0 10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default SectionBelowNavbar;
