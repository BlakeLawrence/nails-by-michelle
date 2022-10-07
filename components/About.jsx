import Image from "next/image";
import michelle from "../public/michelle.jpg";

const About = () => {
  return (
    <>
      {/* main div */}
      <div className="w-full bg-pink-100 pb-12 sm:pb-24 border-t-[1px] border-pink-200">
        {/* Heading div */}
        <div
          role="section"
          id="about"
          className="flex p-4 sm:p-8 sm:pt-10 sm:pl-20 bg-pink-100"
        >
          <h2 className=" main-welcome text-3xl pb-4 sm:text-5xl lg:text-6xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg">
            Pleased to meet you...
          </h2>
        </div>
        {/* Image and description div */}
        <div className="flex flex-col lg:flex-row items-start sm:items-center">
          {/* Image div */}
          <div className="flex flex-col justify-center items-start  w-1/2 h-1/2 sm:w-1/4 pl-4 sm:pl-12">
            <Image
              src={michelle}
              alt="picture of michelle - owner of Nails by Michelle in Cheddar"
              className="rounded-2xl  border-pink-300"
              width="300"
              height="300"
              priority
            />
          </div>
          {/* description div */}
          <div className="flex flex-col justify-center w-full md:w-1/2 pl-4 pr-4 sm:pl-0 sm:pr-0 text-left sm:text-center pt-14">
            <h3 className="main-welcome text-2xl sm:text-5xl sm:pl-12 pb-4 text-[#f889c6] font-bold">
              Hi, I&apos;m Michelle
            </h3>
            <p className="font-[montserrat] sm:pl-12 sm:text-xl text-gray-600 pb-3  ">
              I&apos;m a wife and mother of two beautiful children.
            </p>
            <p className="font-[montserrat] sm:pl-12 sm:text-xl text-gray-600 pb-3  ">
              I started my career as a Nail Technician in 2005 in South Africa.
              Two years later, I followed my dreams and opened my very own salon
              at the age of 21, where I sucessfully ran the business for 14
              years.
            </p>
            <p className="font-[montserrat] sm:pl-12 sm:text-xl text-gray-600 pb-3  ">
              In 2019, we made a family decision to immigrate to the UK where I
              took on a temporary job as an admin assistant for a busy business.
              After a while, my entrepreneurial drive and passion for beautiful
              nails lead me to offer an after hours nail service, which very
              quickly became popular and has since allowed me the opportunity to
              open up a nail salon again in the heart of Cheddar, Somerset.
            </p>
            <p className="font-[montserrat] sm:pl-12 sm:text-xl text-gray-600 ">
              My salon is a warm, friendly environment where everyone is
              welcome. I pride myself in quality workmanship, I thrive on good
              energy and positivity and I always make sure my clients walk out
              feeling confident with their new nails... after all, the magic to
              success begins at our finger tips.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
