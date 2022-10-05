import React from "react";
import Link from "next/link";
import { ImLocation } from "react-icons/im";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../public/logo.svg";

const Navbar = () => {
  return (
    <>
      {/* location etc only for phone mode */}
      <ul className="sm:hidden flex justify-between items-center text-[9px] p-2 border-b-[1px] border-pink-200">
        <li className="flex items-center pr-2">
          <div className="border-[1px] border-pink-400 hover:border-pink-300 rounded-full p-2 mr-3">
            <ImLocation className="text-pink-400" size="1rem" />
          </div>
          <div className="flex flex-col text-[10px] md:text-[15px] text-pink-400 font-[montserrat] font-medium">
            <p>Labourham Way, Draycott</p>
            <p>Cheddar, BS27 3RP</p>
          </div>
        </li>
        <li className="flex  items-center pr-2">
          <div className="border-[1px] border-pink-400 hover:border-pink-300 rounded-full p-2 mr-3">
            <AiOutlineClockCircle className="text-pink-400" size="1rem" />
          </div>
          <div className="flex flex-col text-[10px] md:text-[15px] text-pink-400 font-[montserrat]">
            <p className="font-bold text-pink-400">Mon - Sat</p>
            <Link
              className="hover:cursor-pointer font-medium text-pink-300"
              href="/contact"
            >
              click for opening hours
            </Link>
          </div>
        </li>
        <li className="flex items-center ">
          <div className="border-[1px] border-pink-400 hover:border-pink-300 rounded-full p-2 mr-3">
            <BsFillTelephoneFill className="text-pink-400" size="1rem" />
          </div>
          <div className="flex flex-col text-[10px] md:text-[15px] font-[montserrat]">
            <p className="font-bold text-pink-400">Call</p>
            <p className="font-medium text-pink-300">073 081 40607</p>
          </div>
        </li>
      </ul>
      {/* Main Nav section - Logo and location etc  */}
      <div className="w-full h-[120px] flex justify-between items-center border-b-[1px] border-pink-200 bg-gradient-to-b ">
        <div className=" flex pt-2 sm:pt-1 ml-2 md:ml-4">
          <Image src={logo} alt="main logo" height={100} width={100}></Image>
          <h1 className="text-[#ff4f9e] text-[38px] sm:text-4xl md:text-[36px]  xl:text-6xl pt-8 md:pt-8">
            Nails by Michelle
          </h1>
        </div>

        <ul className="hidden sm:flex justify-between items-center text-[9px] md:text-md md:mr-4">
          <li className="flex items-center pr-4 lg:pr-10">
            <div className="border-[1px] border-pink-400 rounded-full p-2 mr-3 hover:animate-bounce">
              <ImLocation className="text-pink-400" size="1.5rem" />
            </div>
            <div className="flex flex-col text-[10px] md:text-[15px]  text-pink-400 font-[montserrat] font-medium">
              <p>Labourham Way, Draycott</p>
              <p>Cheddar, BS27 3RP</p>
            </div>
          </li>
          <li className="flex  items-center pr-4 lg:pr-10">
            <div className="border-[1px] border-pink-400 rounded-full p-2 mr-3 hover:animate-bounce">
              <AiOutlineClockCircle className="text-pink-400" size="1.5rem" />
            </div>
            <div className="flex flex-col text-[10px] md:text-[15px]  text-pink-400 font-[montserrat]">
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
            <div className="border-[1px] border-pink-400 rounded-full p-2 mr-3 hover:animate-bounce">
              <BsFillTelephoneFill className="text-pink-400" size="1.5rem" />
            </div>
            <div className="flex flex-col text-[10px] md:text-[15px]  text-pink-400 font-[montserrat]">
              <p className="font-bold">Call</p>
              <p className="font-medium text-pink-300">073 081 40607</p>
            </div>
          </li>
        </ul>
      </div>
      <div></div>
      {/* Main Nav - menu items (Home, About etc) */}
      <nav className=" w-full h-[70px] flex justify-between items-center border-b-[3px] border-b-pink-200 font-[montserrat] ">
        <ul className="w-full flex justify-around items-center  text-pink-400">
          <Link href="/">
            <li className="main-welcome text-sm sm:text-2xl font-semibold hover:scale-125 ease-in duration-100 hover:cursor-pointer  hover:text-pink-500">
              Home
            </li>
          </Link>

          <Link href="/price-list">
            <li className="main-welcome text-sm sm:text-2xl font-semibold hover:scale-125 ease-in duration-100 hover:cursor-pointer  hover:text-pink-500">
              Price List
            </li>
          </Link>

          <Link href="/pamper-parties">
            <li className="main-welcome text-sm sm:text-2xl font-semibold hover:scale-125 ease-in duration-100 hover:cursor-pointer  hover:text-pink-500">
              Pamper Parties
            </li>
          </Link>

          <Link href="/contact">
            <li className="main-welcome text-sm sm:text-2xl font-semibold hover:scale-125 ease-in duration-100 hover:cursor-pointer  hover:text-pink-500">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
