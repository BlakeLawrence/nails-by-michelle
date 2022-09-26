import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="w-full h-[125px] flex justify-between items-center px-4 bg-pink-200 shadow-pink-400 shadow-lg">
      <h1 className="text-pink-400 text-3xl sm:text-3xl md:text-4xl lg:text-5xl ml-24 ">
        Nails By Michelle 💅🏼
      </h1>

      <ul className="w-96 hidden sm:flex justify-between mr-24 text-pink-400 ">
        <Link href="/">
          <li className="text-xl font-semibold hover:scale-110 hover:cursor-pointer">
            Home
          </li>
        </Link>

        <Link href="/">
          <li className="text-xl font-semibold hover:scale-110 hover:cursor-pointer">
            About
          </li>
        </Link>

        <Link href="/price-list">
          <li className="text-xl font-semibold hover:scale-110 hover:cursor-pointer">
            Price List
          </li>
        </Link>

        <Link href="/contact">
          <li className="text-xl font-semibold hover:scale-110 hover:cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="sm:hidden z-10">
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
        <Link href="/">
          <li className="py-4 text-3xl" onClick={handleClick}>
            Home
          </li>
        </Link>
        <Link href="/">
          <li className="py-5 text-3xl" onClick={handleClick}>
            About
          </li>
        </Link>
        <Link href="/price-list">
          <li className="py-5 text-3xl" onClick={handleClick}>
            Price List
          </li>
        </Link>
        <Link href="/contact">
          <li className="py-5 text-3xl" onClick={handleClick}>
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
