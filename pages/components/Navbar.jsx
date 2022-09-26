import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between w-full h-[150px] bg-pink-100 shadow-lg shadow-pink-400">
        <h1 className="text-pink-400 text-5xl ml-24">Nails By Michelle 💅🏼</h1>
        <ul className="w-80 flex justify-between mr-24 text-pink-400 font-bold text-xl">
          <Link href="/">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/price-list">
            <a>
              <li>Price List</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
