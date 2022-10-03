import Head from "next/head";
import Link from "next/link.js";
import Footer from "../components/Footer.jsx";

export default function PriceList() {
  return (
    <>
      <Head>
        <title>Nails By Michelle | Price List </title>
        <meta
          name="price-list"
          content="Nails By Michelle - Price list...come treat yourself at an affordable price"
        />
        <link rel="icon" href="/flower-logo.png" />
      </Head>
      <div>
        {/* Pricing card */}

        <div className="w-full h-full pb-10 bg-[url('/varnish.jpg')] ">
          <ul className="flex justify-center pt-6">
            <div className="flex w-full lg:w-9/12 xl:w-7/12  justify-evenly bg-pink-100/90 m-2 sm:m-4 md:m-6 p-2 sm:p-8 rounded-lg">
              <ul className="flex flex-col pr-4 sm:pr-8">
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2 ">
                    Gel Polish
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2 ">
                    Gel Toes
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2 ">
                    Gel Extensions
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2 ">
                    Manicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2">
                    Pedicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2 ">
                    Pedicure & Gel Toes
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £40
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2 ">
                    Kids Manicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £10
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2 ">
                    Kids Pedicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £10
                  </p>
                </div>
                <Link href="/contact">
                  <button className="text-[10px] sm:text-[14px] py-2 sm:py-3 text-[#ffffff] font-medium font-[montserrat] md:w-48 rounded-full bg-purple-400 hover:scale-105 ease-in duration-100 mt-8">
                    book appointment
                  </button>
                </Link>
              </ul>
              {/* right items */}
              <div className="">
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2">
                    File and Polish
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £15
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2">
                    Add On - Builder Gel
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £5
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2">
                    Soak Off (If not done by me)
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £5
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2">
                    Soak Off & Mini Manicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £15
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2">
                    Acrylic Extensions
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £30
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2">
                    Acrylic Overlays
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2">
                    Acrylic Infill
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-400 font-bold mt-2">
                    Add Gel Colour Over Acrylic
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-400 font-bold ml-2 md:ml-6">
                    £5
                  </p>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
