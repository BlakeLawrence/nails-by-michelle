import React from "react";

const PriceItem = ({ price }) => {
  return (
    <div className="pt-8 flex items-center justify-between bg-gray-100 mt-3 pb-3 rounded-xl hover:shadow-md hover:scale-105">
      <li className="pb-4 main-welcome font-[montserrat] text-xl sm:text-3xl md:text-4xl text-pink-400 font-semibold  pl-2 sm:pl-3 lg:pl-8 ">
        {price.name}
      </li>
      <div className="flex justify-evenly ">
        <div className="sm:w-40 flex justify-between items-center ">
          <p className="main-welcome font-[montserrat] text-xl pr-4 text-pink-400 font-medium">
            -
          </p>
          <p className="main-welcome font-[montserrat] text-xl sm:text-3xl pr-6 sm:pr-12 text-pink-400 font-semibold">
            £{price.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceItem;
