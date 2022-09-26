import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav>
      <div className="flex items-center justify-between w-full h-[150px] bg-pink-100 shadow-lg shadow-pink-400">
        <h1 className="text-pink-400 text-5xl ml-24 ">Nails By Michelle 💅🏼</h1>
        {}
        <ul className="w-96 hidden md:flex justify-between mr-24 text-pink-400 font-bold text-xl ">
          <a>
            <Link href="/">
              <li className="hover:scale-110 hover:cursor-pointer">Home</li>
            </Link>
          </a>
          <a>
            <Link href="/">
              <li className="hover:scale-110 hover:cursor-pointer">About</li>
            </Link>
          </a>
          <a>
            <Link href="/price-list">
              <li className="hover:scale-110 hover:cursor-pointer">
                Price List
              </li>
            </Link>
          </a>
          <a>
            <Link href="/contact">
              <li className="hover:scale-110 hover:cursor-pointer">Contact</li>
            </Link>
          </a>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size="1.5rem" /> : <FaTimes size="1.5rem" />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-pink-200"
        }
      >
        <li className="py-4 text-3xl">
          <Link onClick={handleClick} href="/">
            Home
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} href="/">
            About
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} href="/price-list">
            Price List
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
