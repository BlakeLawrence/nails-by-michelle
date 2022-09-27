import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/nail-polish.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      {/* Top Nav section - Logo and location etc  */}
      <div className="w-full h-[100px] flex justify-evenly items-center ">
        <div className="flex items-center">
          <Image src={logo} alt="main logo" width={80} height={80}></Image>
          <h1 className="text-pink-400 text-2xl md:text-3xl lg:text-5xl ml-4 ">
            Nails By Michelle
          </h1>
        </div>

        <ul className="hidden sm:flex justify-between items-center text-sm sm:text-md">
          <li className="flex items-center pr-10">
            <div className="border-[1px] border-gray-300 rounded-full p-2 mr-2 hover:animate-bounce">
              <ImLocation className="text-pink-400" size="1.5rem" />
            </div>
            <div className="flex flex-col text-[#787878]">
              <p>Labourham Way, Draycott</p>
              <p>Cheddar, BS27 3RP</p>
            </div>
          </li>
          <li className="flex  items-center pr-10">
            <div className="border-[1px] border-gray-300 rounded-full p-2 mr-2 hover:animate-bounce">
              <AiOutlineClockCircle className="text-pink-400" size="1.5rem" />
            </div>
            <div className="flex flex-col text-[#787878]">
              <p className="font-medium">Mon - Sat</p>
              <p>
                <Link className="hover:cursor-pointer" href="/contact">
                  click for opening hours
                </Link>
              </p>
            </div>
          </li>
          <li className="flex  items-center">
            <div className="border-[1px] border-gray-300 rounded-full p-2 mr-2 hover:animate-bounce">
              <BsFillTelephoneFill className="text-pink-400" size="1.5rem" />
            </div>
            <div className="flex flex-col text-[#787878]">
              <p className="font-medium">Call</p>
              <p>073 081 40607</p>
            </div>
          </li>
        </ul>
      </div>
      {/* Main Nav - menu items (Home, About etc) */}
      <nav className="w-full h-[80px] flex justify-between items-center bg-pink-200 shadow-pink-400 shadow-md">
        <ul className="w-full flex justify-around items-center  text-[#868789]">
          <Link href="/">
            <li className="text-sm sm:text-xl font-semibold hover:scale-125 hover:cursor-pointer">
              Home
            </li>
          </Link>

          <Link href="/">
            <li className="text-sm sm:text-xl font-semibold hover:scale-125 hover:cursor-pointer">
              About
            </li>
          </Link>

          <Link href="/price-list">
            <li className="text-sm sm:text-xl font-semibold hover:scale-125 hover:cursor-pointer">
              Price List
            </li>
          </Link>

          <Link href="/contact">
            <li className="text-sm sm:text-xl font-semibold hover:scale-125 hover:cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
