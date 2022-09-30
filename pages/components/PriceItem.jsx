import React from "react";

const PriceItem = ({ price }) => {
  return (
    <div className="pt-8 flex items-center justify-between">
      <li className="main-welcome font-[montserrat] text-xl sm:text-4xl text-pink-400 font-bold">
        {price.name}
      </li>
      <div className="flex justify-evenly">
        <div className="sm:w-40 flex justify-between items-center">
          <p className="main-welcome font-[montserrat] text-xl pr-4 text-pink-400 font-bold">
            -
          </p>
          <p className="main-welcome font-[montserrat] text-xl sm:text-3xl pr-6 sm:pr-12 text-pink-400 font-bold">
            £{price.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceItem;
