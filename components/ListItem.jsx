import React from "react";
import { BsHeart } from "react-icons/bs";

const ListItem = ({ service }) => {
  return (
    <li className="main-welcome flex items-center text-[20px] sm:text-[26px] md:text-4xl font-bold text-[#fa9bcf] pt-2 mr-8 sm:mr-24 sm:pr-0 container">
      <BsHeart className="mr-2 sm:mr-6 md:hover:scale-125 w-5 sm:w-6" />
      {service}
    </li>
  );
};

export default ListItem;
