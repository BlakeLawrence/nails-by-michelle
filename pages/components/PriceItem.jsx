import React from "react";

const PriceItem = ({ price }) => {
  return (
    <div className="pt-8 flex items-center justify-between">
      <li className="font-[montserrat] text-3xl text-gray-500">{price.name}</li>
      <div className="flex justify-evenly">
        <div className="w-40 flex justify-between items-center">
          <p className="font-[montserrat] text-xl pr-4 text-gray-500">-</p>
          <p className="font-[montserrat] text-2xl pr-12 text-gray-500">
            £{price.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceItem;
