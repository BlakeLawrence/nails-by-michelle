import React from "react";
import Link from "next/link";

const Navbar = ({ home, about, priceList, contact }) => {
  return (
    <nav>
      <div className="flex items-center justify-between w-full h-[150px] bg-pink-100 shadow-lg shadow-pink-400">
        <h1 className="text-pink-400 text-5xl ml-24 ">Nails By Michelle 💅🏼</h1>
        <ul className="w-96 flex justify-between mr-24 text-pink-400 font-bold text-xl ">
          <a>
            <Link href="#about">
              <li className="hover:scale-110 hover:cursor-pointer">{home}</li>
            </Link>
          </a>
          <a>
            <Link href="/">
              <li className="hover:scale-110 hover:cursor-pointer">{about}</li>
            </Link>
          </a>
          <a>
            <Link href="/price-list">
              <li className="hover:scale-110 hover:cursor-pointer">
                {priceList}
              </li>
            </Link>
          </a>
          <a>
            <Link href="/contact">
              <li className="hover:scale-110 hover:cursor-pointer">
                {contact}
              </li>
            </Link>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
