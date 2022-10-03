import Link from "next/link";
import services from "../lib/services.js"; /* dummy data is data file - mapping over below to produce all services */
import ListItem from "../components/ListItem.jsx";
import PhotoGallery from "./PhotoGallery.jsx";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="p-6 pt-12 sm:pt-18 xl:pl-20 bg-[#C084FC]/20 border-t-[1px] border-pink-200"
      >
        <h3 className="main-welcome text-4xl sm:text-5xl lg:text-6xl font-bold  text-[#f793dc] drop-shadow-lg">
          Services...
        </h3>
        <div className="flex justify-between">
          <ul className="pt-12 pb-12">
            {services.map((service, index) => (
              <ListItem key={index} service={service} />
            ))}
          </ul>
          <PhotoGallery />
        </div>
        <div className="w-full pb-12">
          <h3 className="font-[montserrat] text-sm sm:text-lg text-pink-400">
            For more information, see the{" "}
            <span className="text-purple-500 hover:underline decoration-1  ">
              <Link href="price-list">price list</Link>
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Services;
