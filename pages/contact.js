import Head from "next/head";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Nails By Michelle | Contact </title>
        <meta name="contact" content="Nails By Michelle - Contact page" />
        <link rel="icon" href="/flower-logo.png" />
      </Head>
      {/* main contact card */}
      <div className="flex flex-col h-screen w-full">
        <div className="flex flex-col items-center w-full h-1/3 bg-pink-300 pt-12 lg:pt-8 text-gray-100 font-bold">
          <h3 className="main-welcome text-6xl md:text-7xl">Get in touch...</h3>
        </div>
        {/* Contact Icons */}
        <div className="flex flex-col md:flex-row w-full h-2/3 bg-gray-100">
          <div className="w-full sm:w-8/12 md:w-full lg:w-2/5  flex flex-row">
            <div className=" flex w-8/12 lg:w-5/12 h-[200px] md:h-[300px] bg-gray-100 border-[1px] border-pink-300 mt-[-70px] lg:mt-[-90px] ml-2 lg:ml-12 rounded-xl">
              <ul className="p-4 text-pink-400 font-bold">
                <li className=" flex mt-5 md:mt-8">
                  <BsFillTelephoneFill className="w-[1.5rem] h-[1.5rem] md:w-[1.8rem] md:h-[1.8rem]" />
                  <p className="pl-4 flex items-center text-[14px]">
                    0791 768 2549
                  </p>
                </li>
                <li className="flex mt-5 md:mt-8 ">
                  <BsWhatsapp className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]" />
                  <p className="pl-4 flex items-center text-[14px] md:text-sm">
                    WhatsApp
                  </p>
                </li>
                <li className="flex mt-5 md:mt-8">
                  <AiOutlineMail className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]" />
                  <p className="pl-4 flex items-center text-[14px] md:text-sm">
                    Email
                  </p>
                </li>
              </ul>
            </div>
            {/* Opening Hours */}
            <div className=" flex justify-center md:justify-start w-8/12 lg:w-7/12 h-[200px] md:h-[300px] bg-gray-100 border-[1px] border-pink-300 mt-[-70px] lg:mt-[-90px] mr-2 ml-1 lg:ml-8 rounded-xl">
              <ul className="p-2  text-pink-400 font-bold">
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md">
                  <p className=" flex items-center text-[12px] md:text-[14px]">
                    Monday:
                  </p>
                  <p className="pl-4 flex items-center text-[11px] md:text-[13px]">
                    09:00 - 19:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md">
                  <p className=" flex items-center text-[12px] md:text-[14px]">
                    Tuesday:
                  </p>
                  <p className="pl-4 flex items-center text-[11px] md:text-[13px]">
                    09:00 - 17:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md">
                  <p className=" flex items-center text-[12px] md:text-[14px]">
                    Wednesday:
                  </p>
                  <p className="pl-4 flex items-center text-[11px] md:text-[13px]">
                    09:00 - 17:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md">
                  <p className=" flex items-center text-[12px] md:text-[14px]">
                    Thursday:
                  </p>
                  <p className="pl-4 flex items-center text-[11px] md:text-[13px]">
                    09:00 - 17:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md">
                  <p className=" flex items-center text-[12px] md:text-[14px]">
                    Friday:
                  </p>
                  <p className="pl-4 flex items-center text-[11px] md:text-[13px]">
                    09:00 - 17:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md">
                  <p className=" flex items-center text-[12px] md:text-[14px]">
                    Saturday:
                  </p>
                  <p className="pl-4 flex items-center text-[11px] md:text-[13px]">
                    09:30 - 14:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md">
                  <p className=" flex items-center text-[12px] md:text-[15px]">
                    Sunday:
                  </p>
                  <p className=" flex items-center text-[12px] md:text-[14px]">
                    Closed
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Thank you paragraph */}
          <div className="w-full lg:w-2/5 flex flex-col ">
            <div className=" text-left ml-12 pt-6 text-xl md:text-3xl font-medium font-[montserrat] text-pink-400 ">
              Thank you for popping in...
            </div>
            <div className=" text-center md:text-left ml-2 md:ml-12 pt-6 text-md md:text-xl font-medium font-[montserrat] text-pink-400 ">
              For the quickest response, please whatsapp or call
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
