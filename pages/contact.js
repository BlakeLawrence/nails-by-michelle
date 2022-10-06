import Head from "next/head";
import Footer from "../components/Footer";
import Link from "next/link";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <Head>
        <title>
          Nails By Michelle | Contact. Contact me today and book yourself in at
          my Nail Salon in Cheddar, Somerset
        </title>

        <meta name="contact" content="Nails By Michelle - Contact Page" />
        <meta
          name="description"
          content="Contact page. Please call or whatsapp me on 073 081 40607 to book in your appointment today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {/* main contact card */}
      <div className="flex flex-col h-screen w-full">
        <div className="flex flex-col items-center w-full h-1/3 bg-pink-300 pt-12 lg:pt-8 text-gray-100 font-bold">
          <h3 className="main-welcome text-5xl sm:text-5xl sm:pl-40 md:pl-0 lg:text-7xl drop-shadow-lg">
            Get in touch...
          </h3>
        </div>
        {/* Contact Icons */}
        <div className="flex flex-col sm:flex-row w-full h-2/3 bg-gray-100 ">
          <div className="w-full sm:w-8/12 md:w-full lg:w-2/5  flex flex-row ">
            <div className=" flex w-8/12 lg:w-5/12 h-[200px] md:h-[300px] bg-gray-100 border-[1px] sm:border-[2px] border-pink-300 mt-[-70px] lg:mt-[-90px] ml-2 lg:ml-12 rounded-xl shadow-lg">
              <ul className="p-4 sm:p-3 md:p-4 text-pink-400 font-bold">
                <li className=" flex mt-5 md:mt-8">
                  <BsFillTelephoneFill className="w-[1.2rem] h-[1.2rem] md:w-[1.8rem] md:h-[1.8rem]" />
                  <p className="pl-3 md:pl-4 flex items-center text-[12px] sm:text-[10px] md:text-[14px] font-[montserrat]">
                    073 081 40607
                  </p>
                </li>
                <li className="flex mt-5 md:mt-8 ">
                  <BsWhatsapp className="w-[1.2rem] h-[1.2rem] md:w-[2rem] md:h-[2rem]" />
                  <p className="pl-3 md:pl-4 flex items-center text-[12px] sm:text-[10px] md:text-[14px] md:text-sm font-[montserrat]">
                    073 081 40607
                  </p>
                </li>
                <Link href="mailto:Nailsbymichellecheddar@outlook.com">
                  <li className="flex mt-5 md:mt-8 hover:cursor-pointer">
                    <AiOutlineMail className="w-[1.2rem] h-[1.2rem] md:w-[2rem] md:h-[2rem]" />
                    <p className="pl-3 md:pl-4 flex items-center text-[13px] sm:text-[10px] md:text-sm font-[montserrat]">
                      click to mail
                    </p>
                  </li>
                </Link>
              </ul>
            </div>
            {/* Opening Hours */}
            <div className=" flex justify-center md:justify-start w-8/12 lg:w-7/12 h-[200px] md:h-[300px] bg-gray-100 border-[1px] sm:border-[2px] border-pink-300 mt-[-70px] lg:mt-[-90px] mr-2 ml-1 lg:ml-8 rounded-xl shadow-lg">
              <ul className="p-2 pt-6  text-pink-400 font-bold">
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md font-[montserrat]">
                  <p className=" flex items-center text-[11px] sm:text-[8px] md:text-[14px] ">
                    Monday:
                  </p>
                  <p className="pl-4 flex items-center text-[10px] sm:text-[8px] md:text-[13px] ">
                    09:00 - 19:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md font-[montserrat]">
                  <p className=" flex items-center text-[11px] sm:text-[8px] md:text-[14px]">
                    Tuesday:
                  </p>
                  <p className="pl-4 flex items-center text-[10px] sm:text-[8px] md:text-[13px]">
                    09:00 - 17:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md font-[montserrat]">
                  <p className=" flex items-center text-[11px] sm:text-[8px] md:text-[14px]">
                    Wednesday:
                  </p>
                  <p className="pl-4 flex items-center text-[10px] sm:text-[7px] md:text-[13px]">
                    09:00 - 17:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md font-[montserrat]">
                  <p className=" flex items-center text-[11px] sm:text-[8px] md:text-[14px]">
                    Thursday:
                  </p>
                  <p className="pl-4 flex items-center text-[10px] sm:text-[8px] md:text-[13px]">
                    09:00 - 17:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md font-[montserrat]">
                  <p className=" flex items-center text-[11px] sm:text-[8px] md:text-[14px]">
                    Friday:
                  </p>
                  <p className="pl-4 flex items-center text-[10px] sm:text-[8px] md:text-[13px]">
                    09:00 - 17:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md font-[montserrat]">
                  <p className=" flex items-center text-[11px] sm:text-[8px] md:text-[14px]">
                    Saturday:
                  </p>
                  <p className="pl-4 flex items-center text-[10px] sm:text-[8px] md:text-[13px]">
                    09:30 - 14:00
                  </p>
                </li>
                <li className=" flex justify-between mt-1 md:mt-3 lg:pl-2 text-[12px] md:text-md font-[montserrat]">
                  <p className=" flex items-center text-[11px] sm:text-[8px] md:text-[15px]">
                    Sunday:
                  </p>
                  <p className=" flex items-center text-[11px] sm:text-[9px] md:text-[14px]">
                    Closed
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Thank you paragraph */}
          <div className="w-full lg:w-2/5 flex flex-col ">
            <div className=" text-center pt-12 text-2xl md:text-3xl font-medium font-[montserrat] text-pink-400  ">
              Thank you for popping in...
            </div>
            <div className=" text-center ml-2 pt-6 text-md md:text-xl font-medium font-[montserrat] text-pink-400  ">
              For the quickest response, please whatsapp or call me.
            </div>
            <div className=" text-center ml-2 pt-2 text-md md:text-xl font-medium font-[montserrat] text-pink-400  ">
              Emails may take a bit longer.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
