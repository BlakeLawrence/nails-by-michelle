import Link from "next/link";
import services from "../data/services.js"; /* dummy data is data file - mapping over below to produce all services */
import ListItem from "./ListItem.jsx";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="p-6 pt-12 sm:pt-18 sm:pl-24 bg-[#C084FC]/20 border-t-[1px] border-pink-200"
      >
        <h3 className="main-welcome text-4xl sm:text-5xl lg:text-6xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg">
          SERVICES...
        </h3>
        <div className="flex">
          <ul className=" pt-12 pb-12">
            {services.map((service, index) => (
              <ListItem key={index} service={service} />
            ))}
          </ul>
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
{
  /* <li className="main-welcome flex text-[28px]  sm:text-4xl font-bold text-[#fa9bcf]  pt-4 ">
<BsHeart className="mr-6 hover:scale-125" /> Gel Extensions
</li>
<li className="main-welcome flex text-[28px]  sm:text-4xl font-bold text-[#fa9bcf]  pt-4 ">
<BsHeart className="mr-6 hover:scale-125" /> Manicures
</li>
<li className="main-welcome flex text-[28px]  sm:text-4xl font-bold text-[#fa9bcf]  pt-4 ">
<BsHeart className="mr-6 hover:scale-125" /> Pedicures
</li>

<li className="main-welcome flex text-[28px]  sm:text-4xl font-bold text-[#fa9bcf]  pt-4 ">
<BsHeart className="mr-6 hover:scale-125" /> Acrylic Extensions
</li>
<li className="main-welcome flex text-[28px]  sm:text-4xl font-bold text-[#fa9bcf]  pt-4 ">
<BsHeart className="mr-6 hover:scale-125" /> Acrylic Overlays
</li>
<li className="main-welcome flex text-[28px]  sm:text-4xl font-bold text-[#fa9bcf]  pt-4 ">
<BsHeart className="mr-6 hover:scale-125" /> Acrylic Infill
</li>
<li className="main-welcome flex text-[28px] sm:text-4xl font-bold text-[#fa9bcf]  pt-4 ">
<BsHeart className="mr-6 hover:scale-125" /> Eye Lash extensions
</li> */
}
