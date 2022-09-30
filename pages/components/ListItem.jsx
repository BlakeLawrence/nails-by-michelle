import React from "react";
import { BsHeart } from "react-icons/bs";

const ListItem = ({ service }) => {
  return (
    <li className="main-welcome flex text-[28px]  sm:text-4xl font-bold text-[#fa9bcf] pt-4 ">
      <BsHeart className="mr-6 hover:scale-125" />
      {service}
    </li>
  );
};

export default ListItem;
