import Head from "next/head";
import Link from "next/link.js";
import Footer from "../components/Footer.jsx";

export default function PriceList() {
  return (
    <>
      <Head>
        <title>
          Nails By Michelle | Price List. Pricing for my nail services.
        </title>

        <meta name="price-list" content="Nails By Michelle - Price List." />

        <meta
          name="description"
          content="This is my Price list. Treat yourself today to an affordable range of nail treatments. To book yourself in, call or whatsapp me on 073 081 40607. I Offer many services including Manicures, pedicures, gel polish applications, kids manicures and pedicures, kids pamper parties and a variety of eye lash services too."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        {/* open graph tags */}
        <meta
          property="og:url"
          content="https://nails-by-michelle.netlify.app/price-list"
        />
        <meta property="og:title" content="Nails By Michelle - Price List." />
        <meta
          property="og:description"
          content="This is my Price list. Treat yourself today to an affordable range of nail treatments. To book yourself in, call or whatsapp me on 073 081 40607."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dnui98kxa/image/upload/v1665416540/OG_Image_-_prilce_list_fot1kf.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Link Tag */}
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div>
        {/* Pricing card */}
        <div className="p-2 w-full h-full pb-10 bg-[url('/varnish.jpg')] ">
          <ul className="flex justify-center pt-6">
            <div className="flex w-full lg:w-9/12 xl:w-8/12 justify-start  bg-gray-100/95 dark:bg-slate-800 sm:m-4 md:m-6 p-2 sm:p-6 rounded-lg shadow-lg">
              <ul className="p-2 flex flex-col pr-4 sm:pr-8">
                <h4 className="font-mono underline text-sm sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                  Nails
                </h4>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Acrylic Extensions
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-0 md:ml-6">
                    £30
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-4">
                    - with gel polish
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £40
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Acrylic Overlays
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-4">
                    - with gel polish
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £35
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Acrylic Infill with gel polish
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Acrylic / Gel Removal
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-0 md:ml-6">
                    £10
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Gel Extensions
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £30
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-md sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Gel Polish
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Gel Toes
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    BIAB Gel Polish
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-0 md:ml-6">
                    £30
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    BIAB Gel Infill
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £27
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Nail Art / Nail Fix
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-0 md:ml-6">
                    £5
                  </p>
                </div>
                <h4 className="font-mono underline text-sm sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-6 ">
                  Manis & Pedis
                </h4>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Elim Pedicure
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £37
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Cut, file & Paint
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-0 md:ml-6">
                    £15
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Luxury Manicure
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-0 md:ml-6">
                    £30
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Cut, file & Paint
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-0 md:ml-6">
                    £15
                  </p>
                </div>

                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4">
                    Add Gel Polish
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £10
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Kids Manicure
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £10
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 ">
                    Kids Pedicure
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
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
              <div className=" sm:pl-14 xl:pl-24">
                <h4 className="pt-2 font-mono underline text-sm sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0 ">
                  Lashes and Brows
                </h4>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Lvl Ceralift (lift, curl and tint natural lashes) 
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £45
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Eyebrow tint
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £12
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Eyebrow tint & wax
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £18
                  </p>
                </div>
                <h4 className="font-mono underline text-sm sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0 ">
                  Waxing
                </h4>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Eyebrow
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £9
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Lip or Chin
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £8
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Full face
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    1/2 Leg
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £20
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    3/4 Leg
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £25
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Full Leg
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £29
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Bikini
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £14
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Underarm
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £12
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Full arm
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £16
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Chest or Back
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £18
                  </p>
                </div>

                <h4 className="font-mono underline text-sm sm:text-xl md:text-2xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0 ">
                  Massages
                </h4>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Full Body (1 hr)
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-0 md:ml-6">
                    £45
                  </p>
                </div>
                <div className=" flex justify-between items-end">
                  <li className="main-welcome text-sm sm:text-xl md:text-3xl text-pink-500 font-bold mt-2 sm:mt-4 pl-2 sm:pl-0">
                    Back, Neck & Shoulders (30 mins)
                  </li>
                  <p className="main-welcome text-xs sm:text-xl text-pink-500 font-bold ml-2 md:ml-6">
                    £32
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
