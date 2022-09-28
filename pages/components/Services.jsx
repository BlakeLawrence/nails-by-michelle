import React from "react";
import Image from "next/image";
import pamper from "../../public/pamper.png";
import nails from "../../public/nails.jpg";

const Services = () => {
  return (
    <>
      <div
        name="services"
        className="flex flex-col p-8 pt-12 sm:pt-24 sm:pl-24   bg-[#C084FC]/25"
      >
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg">
          SERVICES...
        </h3>
      </div>
      <div className="flex justify-center items-center w-full  bg-[#C084FC]/25 pb-24">
        <div className="w-96 h-96 bg-gray-300/50 mt-36 mr-8 rounded-lg shadow-lg">
          <div className="w-full rounded-t-lg">
            <Image className="rounded-t-lg" src={nails} alt="nails" />
          </div>
        </div>
        <div className="w-96 h-96 bg-gray-300/50 mt-20 mr-8 rounded-lg  shadow-lg">
          <div className="w-full h-52 rounded-t-lg bg-[#a75c5c] ">
            <Image
              className="rounded-t-lg"
              src={pamper}
              height={310}
              alt="pamper party image"
            />
          </div>
        </div>
        <div className="w-96 h-96 bg-gray-300/50 mt-36 mr-8 rounded-lg  shadow-lg">
          <div className="w-full h-52 rounded-t-lg bg-[#a75c5c]">
            <Image
              className="rounded-t-lg"
              src={pamper}
              height={310}
              alt="pamper party image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
