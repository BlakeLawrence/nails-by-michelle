import Link from "next/link";
import services from "../lib/services.js"; /* dummy data is data file - mapping over below to produce all services */
import ListItem from "../components/ListItem.jsx";
import PhotoGallery from "./PhotoGallery.jsx";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="pt-6 pl-4 w-full pb-6 pr-4 sm:pt-8 xl:pl-20 bg-[#C084FC]/20 border-t-[1px] border-pink-200 "
      >
        <h3 className="main-welcome text-4xl sm:text-5xl lg:text-6xl font-bold  text-[#f793dc] drop-shadow-lg">
          Services...
        </h3>
        <div className="flex flex-col md:flex-row justify-between">
          <ul className="w-2/3 pt-12 pb-2">
            {services.map((service, index) => (
              <ListItem key={index} service={service} />
            ))}
            <div className="pt-6 md:pt-12">
              <Link href="https://www.fresha.com/a/nails-by-michelle-cheddar-bath-street-cd78i7xy?pId=749479">
                <a target="_blank">
                  <button className="text-[11px] sm:text-[16px] py-3 bg-purple-400 border-[1px] font-semibold font-[montserrat] w-20 sm:w-24 md:w-28 border-purple-400 rounded-full text-[#ffffff] hover:scale-110 ease-in duration-100 mb-8 sm:mb-12">
                    Book Now
                  </button>
                </a>
              </Link>
            </div>
          </ul>
          <PhotoGallery />
        </div>
      </div>
    </>
  );
};

export default Services;
