import React from "react";
import Link from "next/link";
import { useState } from "react";
import { ImLocation } from "react-icons/im";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/nail-polish.svg";

const Navbar = () => {
  return (
    <>
      {/* location etc only for phone mode */}
      <ul className="sm:hidden flex justify-between items-center text-[9px] p-2 border-b-[1px] border-gray-200">
        <li className="flex items-center pr-2">
          <div className="border-[1px] border-gray-300 hover:border-pink-300 rounded-full p-2 mr-3 hover:animate-bounce">
            <ImLocation className="text-pink-400" size="1rem" />
          </div>
          <div className="flex flex-col text-[10px] md:text-[15px]  text-[#787878] font-[montserrat] font-medium">
            <p>Labourham Way, Draycott</p>
            <p>Cheddar, BS27 3RP</p>
          </div>
        </li>
        <li className="flex  items-center pr-2">
          <div className="border-[1px] border-gray-300 hover:border-pink-300 rounded-full p-2 mr-3 hover:animate-bounce">
            <AiOutlineClockCircle className="text-pink-400" size="1rem" />
          </div>
          <div className="flex flex-col text-[10px] md:text-[15px]  text-[#787878] font-[montserrat]">
            <p className="font-bold">Mon - Sat</p>
            <Link className="hover:cursor-pointer font-medium" href="/contact">
              click for opening hours
            </Link>
          </div>
        </li>
        <li className="flex items-center ">
          <div className="border-[1px] border-gray-300 hover:border-pink-300 rounded-full p-2 mr-3 hover:animate-bounce">
            <BsFillTelephoneFill className="text-pink-400" size="1rem" />
          </div>
          <div className="flex flex-col text-[10px] md:text-[15px]  text-[#787878] font-[montserrat]">
            <p className="font-bold">Call</p>
            <p className="font-medium">073 081 40607</p>
          </div>
        </li>
      </ul>
      {/* Top Nav section - Logo and location etc  */}
      <div className="w-full h-[120px] flex justify-evenly items-center border-b-[1px] border-gray-200">
        <div className="pl-3 lg:pl-0 flex items-center">
          <Image src={logo} alt="main logo" width={80} height={80}></Image>
          <h1 className="text-pink-400 text-2xl sm:text-3xl xl:text-4xl ml-4 font-[montserrat] font-medium">
            Nails By Michelle
          </h1>
        </div>

        <ul className="hidden sm:flex justify-between items-center text-sm sm:text-md">
          <li className="flex items-center pr-4 lg:pr-10">
            <div className="border-[1px] border-gray-300 hover:border-pink-300 rounded-full p-2 mr-3 hover:animate-bounce">
              <ImLocation className="text-pink-400" size="1.5rem" />
            </div>
            <div className="flex flex-col text-[10px] md:text-[15px]  text-[#787878] font-[montserrat] font-medium">
              <p>Labourham Way, Draycott</p>
              <p>Cheddar, BS27 3RP</p>
            </div>
          </li>
          <li className="flex  items-center pr-4 lg:pr-10">
            <div className="border-[1px] border-gray-300 hover:border-pink-300 rounded-full p-2 mr-3 hover:animate-bounce">
              <AiOutlineClockCircle className="text-pink-400" size="1.5rem" />
            </div>
            <div className="flex flex-col text-[10px] md:text-[15px]  text-[#787878] font-[montserrat]">
              <p className="font-bold">Mon - Sat</p>
              <Link
                className="hover:cursor-pointer font-medium"
                href="/contact"
              >
                click for opening hours
              </Link>
            </div>
          </li>
          <li className="flex  items-center">
            <div className="border-[1px] border-gray-300 hover:border-pink-300 rounded-full p-2 mr-3 hover:animate-bounce">
              <BsFillTelephoneFill className="text-pink-400" size="1.5rem" />
            </div>
            <div className="flex flex-col text-[10px] md:text-[15px]  text-[#787878] font-[montserrat]">
              <p className="font-bold">Call</p>
              <p className="font-medium">073 081 40607</p>
            </div>
          </li>
        </ul>
      </div>
      <div></div>
      {/* Main Nav - menu items (Home, About etc) */}
      <nav className=" w-full h-[70px] flex justify-between items-center  shadow-pink-400 shadow-xl font-[montserrat]">
        <ul className="w-full flex justify-around items-center  text-[#868789]">
          <Link href="/">
            <li className="text-sm sm:text-xl font-medium hover:scale-125 hover:cursor-pointer  hover:text-pink-400">
              Home
            </li>
          </Link>

          <Link href="/">
            <li className="text-sm sm:text-xl font-medium hover:scale-125 hover:cursor-pointer  hover:text-pink-400">
              About
            </li>
          </Link>

          <Link href="/price-list">
            <li className="text-sm sm:text-xl font-medium hover:scale-125 hover:cursor-pointer  hover:text-pink-400">
              Price List
            </li>
          </Link>

          <Link href="/contact">
            <li className="text-sm sm:text-xl font-medium hover:scale-125 hover:cursor-pointer  hover:text-pink-400">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
