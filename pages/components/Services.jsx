import React from "react";
import Image from "next/image";
import pamper from "../../public/pamper.png";
import nails from "../../public/nails.jpg";
import lashes from "../../public/lashes.jpg";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="flex p-8 pt-12 sm:pt-24 sm:pl-24 bg-[#C084FC]/20 blur-t-sm"
      >
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg">
          SERVICES...
        </h3>
      </div>
      <div className="flex justify-center items-center w-full  bg-[#C084FC]/20 pb-24">
        <div className="w-96 h-32 sm:h-96 bg-[#ffffff] ml-4 sm:ml-0 mt-8 sm:mt-36 mr-4 sm:mr-12 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center w-full rounded-t-lg ">
            <Image
              className="rounded-t-lg"
              src={nails}
              height={1000}
              alt="nails"
            />
            <div className="bg-pink-300 w-11/12 sm:w-2/3 rounded-md mt-2 sm:mt-6">
              <p className="flex justify-center text-[11px] sm:text-xl p-2 sm:p-4 text-[#ffff] font-medium font-[montserrat]">
                All Nails
              </p>
            </div>
          </div>
        </div>
        <div className="w-96 h-32 sm:h-96 bg-[#ffffff] mt-2 sm:mt-20 mr-4 sm:mr-12 rounded-lg  shadow-lg">
          <div className="flex flex-col justify-center items-center w-full rounded-t-lg ">
            <Image
              className="rounded-t-lg"
              src={pamper}
              height={280}
              alt="pamper party image"
            />

            <div className=" bg-pink-300 w-11/12 sm:w-2/3 rounded-md mt-2 sm:mt-6">
              <p className="flex justify-center text-[11px] sm:text-xl p-2 sm:p-4 text-[#ffff] font-medium font-[montserrat]">
                Kids Pamper Parties
              </p>
            </div>
          </div>
        </div>
        <div className="w-96 h-32 sm:h-96 bg-[#ffffff] mt-8 sm:mt-36 mr-4 sm:mr-12 rounded-lg  shadow-lg">
          <div className="flex flex-col justify-center items-center w-full rounded-t-lg ">
            <Image
              className="rounded-t-lg"
              src={lashes}
              height={825}
              alt="pamper party image"
            />
            <div className="bg-pink-300 w-11/12 sm:w-2/3 rounded-md mt-2 sm:mt-6">
              <p className="flex justify-center text-[11px] sm:text-xl p-2 sm:p-4 text-[#ffff] font-medium font-[montserrat]">
                Lashes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
