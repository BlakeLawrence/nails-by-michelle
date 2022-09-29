import Image from "next/image";
import michelle from "../../public/michelle.jpg";

const About = () => {
  return (
    <>
      {/* main div */}
      <div className="w-full bg-pink-100 pb-12 sm:pb-24">
        {/* Heading div */}
        <div id="about" className="flex p-8 sm:pt-10 sm:pl-20 bg-pink-100">
          <h3 className="text-3xl pb-4 sm:text-5xl lg:text-6xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg">
            ABOUT ME...
          </h3>
        </div>
        {/* Image and description div */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          {/* Image div */}
          <div className="flex flex-col items-start w-1/2 h-1/2 sm:w-1/4 pl-4 sm:pl-12">
            <Image
              src={michelle}
              alt="picture of michelle"
              className="rounded-full  border-pink-300"
              width={300}
              height={300}
            />
          </div>
          {/* description div */}
          <div className="w-full sm:w-1/2 pl-4 pr-4 sm:pl-0 sm:pr-0 text-left pt-8">
            <h3 className="text-2xl sm:text-4xl font-[montserrat] sm:pl-12 pb-4 text-pink-300 font-bold">
              Hi, I'm Michelle
            </h3>
            <p className="font-[montserrat] sm:pl-12 sm:text-lg text-gray-600 pb-3 ">
              I am a wife and mother of two beautiful children.
            </p>
            <p className="font-[montserrat] sm:pl-12 sm:text-lg text-gray-600 pb-3 ">
              I started my career as a Nail technician in 2005 in South Africa.
              Two years later I followed my dreams and opened my own salon at 21
              years of age.
            </p>
            <p className="font-[montserrat] sm:pl-12 sm:text-lg text-gray-600 pb-3 ">
              I successfully ran my own salon for 14 years. In 2019 We made a
              family decision to immigrate to the UK. I then decided to pursue a
              career in Admin.
            </p>
            <p className="font-[montserrat] sm:pl-12 sm:text-lg text-gray-600 pb-3 ">
              In 2022 I slowly began to do nails afterhours and after 3 months I
              have opened up my own salon in the heart of Cheddar, UK. My vision
              for my salon and my clients is to always be welcoming, a warm
              place where everyone is welcome.
            </p>
            <p className="font-[montserrat] sm:pl-12 sm:text-lg text-gray-600">
              I thrive on good energy and positivity, Negativity will be left at
              the door along with your muddy shoes.. (uk weather) I want all my
              clients walking out my salon feeling confident with their new
              nails after all the magic to success begins at our finger tips.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
