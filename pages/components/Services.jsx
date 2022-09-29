import Link from "next/link";
import { BsHeart } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="p-6 pt-12 sm:pt-18 sm:pl-24 bg-[#C084FC]/20"
      >
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg">
          SERVICES...
        </h3>
        <div className="flex">
          <ul className=" pt-12 pb-12">
            <div>
              <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-[#fda6d6] pt-4 ">
                <BsHeart className="mr-6" /> Gel Polish
              </li>
              <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-[#fda6d6] pt-4 ">
                <BsHeart className="mr-6" /> Gel Extensions
              </li>
            </div>
            <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-[#fda6d6] pt-4 ">
              <BsHeart className="mr-6" /> Manicures
            </li>
            <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-[#fda6d6] pt-4 ">
              <BsHeart className="mr-6" /> Pedicures
            </li>

            <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-[#fda6d6] pt-4 ">
              <BsHeart className="mr-6" /> Acrylic Extensions
            </li>
            <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-[#fda6d6] pt-4 ">
              <BsHeart className="mr-6" /> Acrylic Overlays
            </li>
            <li className="flex text-[23px]  sm:text-4xl font-[montserrat] font-bold text-[#fda6d6] pt-4 ">
              <BsHeart className="mr-6" /> Acrylic Infill
            </li>
            <li className="flex text-[23px] sm:text-4xl font-[montserrat] font-bold text-[#fda6d6] pt-4 ">
              <BsHeart className="mr-6" /> Eye Lash extensions
            </li>
          </ul>
        </div>
        <div className="w-full pb-12">
          <h3 className="font-[montserrat] sm:text-2xl text-pink-400">
            For more information, see the{" "}
            <span className="text-purple-500">
              <Link href="price-list">price list</Link>
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Services;
