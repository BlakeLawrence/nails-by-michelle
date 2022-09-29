import React from "react";
import { BsHeart } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="p-8 pt-12 sm:pt-24 sm:pl-24 bg-[#C084FC]/20"
      >
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg">
          SERVICES...
        </h3>
        <ul className=" pt-12 pb-20">
          <div>
            <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-pink-300 pt-4 ">
              <BsHeart className="mr-6" /> Gel Polish
            </li>
          </div>
          <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-pink-300 pt-4 ">
            <BsHeart className="mr-6" /> Manicures
          </li>
          <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-pink-300 pt-4 ">
            <BsHeart className="mr-6" /> Pedicures
          </li>

          <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-pink-300 pt-4 ">
            <BsHeart className="mr-6" /> Gel Extensions
          </li>
          <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-pink-300 pt-4 ">
            <BsHeart className="mr-6" /> Acrylic Extensions
          </li>
          <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-pink-300 pt-4 ">
            <BsHeart className="mr-6" /> Acrylic Overlays
          </li>
          <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-pink-300 pt-4 ">
            <BsHeart className="mr-6" /> Acrylic Infill
          </li>
          <li className="flex text-[23px] sm:text-4xl font-[montserrat] font-bold text-pink-300 pt-4 ">
            <BsHeart className="mr-6" /> Eye Lash extensions
          </li>
        </ul>
      </div>
    </>
  );
};

export default Services;
