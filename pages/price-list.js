import Head from "next/head";
import Link from "next/link.js";
import Footer from "../components/Footer.jsx";

export default function PriceList() {
  return (
    <>
      <Head>
        <title>
          Nails By Michelle | Price List. Nail Salon in Cheddar, Somerset
        </title>
        <meta name="robots" content="all" />
        <meta name="price-list" content="Nails By Michelle - Price List." />
        <meta
          name="description"
          content="This is my Price list. Treat yourself today to an affordable range of nail treatments. To book yourself in, call or whatsapp me on 073 081 40607."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div>
        {/* Pricing card */}

        <div className="p-2 w-full h-full pb-10 bg-[url('/varnish.jpg')] ">
          <ul className="flex justify-center pt-6">
            <div className="flex w-full lg:w-9/12 xl:w-7/12 justify-start  bg-gray-100/95 m-2 sm:m-4 md:m-6 p-2 sm:p-6 rounded-lg shadow-lg">
              <ul className="p-2 flex flex-col pr-4 sm:pr-8">
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Gel Polish
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Gel Toes
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Gel Extensions
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Add On - Builder Gel
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £5
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Manicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Pedicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Pedicure & Gel Toes
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £40
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Kids Manicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £10
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Kids Pedicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £10
                  </p>
                </div>
                <Link href="/contact">
                  <button className="text-[10px] sm:text-[14px] py-2 sm:py-3 text-[#ffffff] font-medium font-[montserrat] md:w-48 rounded-full bg-purple-500 hover:scale-105 ease-in duration-100 mt-4 sm:mt-7">
                    book appointment
                  </button>
                </Link>
              </ul>
              {/* right items */}
              <div className="p-2 sm:pl-14 xl:pl-24">
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    File and Polish
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £15
                  </p>
                </div>

                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Soak Off (If not done by me)
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £5
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Soak Off & Mini Manicure
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £15
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Acrylic Extensions
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £30
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Acrylic Overlays
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Acrylic Infill
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Add Gel Colour Over Acrylic
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £5
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Classic Eyelashes
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £50
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    - 2 week infill
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    - 3 week infill
                  </li>
                  <p className="main-welcome text-sm sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className="">
                  <li className="main-welcome text-xs sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-4">
                    various eye lash extension coming soon
                  </li>
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
