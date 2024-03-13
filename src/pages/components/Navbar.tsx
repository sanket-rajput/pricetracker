import Link from "next/link";
import Image from "next/image";
import React from "react";
import aboutus2 from "../../../public/assets/icons/aboutus2.svg";
import logo from "../../../public/assets/icons/LOGO Rs.svg"
import SectionBelowNavbar from "./categorise";
// const navIcons = [
//   { src: '/assets/icons/black-heart.svg', alt: 'Recent products' },
//   { src: '/assets/icons/user.svg', alt: 'user' },
// ]

const Navbar = () => {
  return (
    <header className="w-full ">
      <nav className="nav fixed top-0 left-0 right-0  shadow-lg p-4 z-10 bg-transparent backdrop-blur-lg">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src={logo}
            width={27}
            height={27}
            alt="Logo"
          />

          {/* nav-logo */}
          <p className=" Poppins text-2xl shd2 font-bold text-white" >
            Price<span className="text-yellow-400 Poppins text-2xl  shd">Tracke</span>
            <span className="text-lg text-yellow-400">₹</span>
          </p>

        </Link>

        {/* Move the "Shop Smarter, Save Bigger!" text below the PriceTracker name */}
        <div className="flex items-center shd">
        <Image
            src="/assets/icons/chart.svg"
            alt="arrow-right"
            width={20}
            height={20}
            className="ml-1"
          />
          <p className="small-text reveal-text hidden sm:block text-2xl shd2 one font-extrabold">
          Search & Save!
          </p>
          
        </div>
        <div className="flex items-center gap-5">

          {/* <Link href="/" className=" gap-1 shd">
            <Image
              src="/assets/icons/black-heart.svg"
              alt="Recent products"
              width={28}
              height={28}
              className="object-contain"
            />
          </Link>
          */}

          <SectionBelowNavbar/>

          <Link href="/loginpg" className=" gap-1 shd  hover:text-yellow-500">
            <Image
              src="/assets/icons/user.svg"
              alt="user"
              width={28}
              height={28}
              className="object-contain"
            />
          </Link>
          
          <Link href="/about" className=" gap-1 shd  hover:text-yellow-500">
          <Image
              src={aboutus2}
              alt="user"
              width={24}
              height={24}
              className="object-contain  hover:text-yellow-500"
            />
          </Link>

          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
