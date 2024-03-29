import Head from "next/head";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import pamper1 from "../public/1.pamper.jpeg";
import pamper2 from "../public/2.pamper.jpeg";
import pamper3 from "../public/3.pamper.jpeg";
import pamper4 from "../public/4.pamper.jpeg";
import pamper5 from "../public/5.pamper.jpeg";
import pamper6 from "../public/6.pamper.jpeg";

export default function Pamper() {
  return (
    <>
      <Head>
     
        <title>
          Nails By Michelle | Pamper Parties. Pamper Parties in Cheddar,
          Somerset
        </title>

        <meta
          name="pamper-parties"
          content="Nails By Michelle - Pamper parties. Book your child in for a magical pamper experience."
        />
        <meta
          name="description"
          content="Our pamper parties are packed full of fun and girly treats. Spoil your little ones and book them in for a day of bliss. Very popular so dont delay, book today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/logo.svg" />

        {/* open graph tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nails-by-michelle.netlify.app/pamper-parties"
        />
        <meta property="og:site_name" content="Nails By Michelle" />
        <meta
          property="og:title"
          content="Nails By Michelle | Pamper Parties. Nail Salon in Cheddar, Somerset"
        />
        <meta
          property="og:description"
          content="Our pamper parties are packed full of fun and girly treats. Spoil your little ones and book them in for a day of bliss. Very popular so dont delay, book today!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dnui98kxa/image/upload/v1665417693/OG_Image_-_pamper_party_olaqmy.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="w-full h-full pb-10 bg-[url('/varnish.jpg')] bg-no-repeat ">
        <ul className="flex flex-col md:flex-row justify-center pt-6">
          <div className="flex w-full lg:w-9/12 justify-evenly bg-gray-100/95 dark:bg-slate-800 m-1 mr-6 p-1 sm:p-8 rounded-lg shadow-lg">
            <ul className="flex flex-col pr-2 sm:pr-8 w-1/2">
              <div className=" flex flex-col sm:flex-row  sm:justify-between items-start sm:items-end">
                <li className="main-welcome text-lg sm:text-xl md:text-4xl text-pink-500 font-bold mt-2">
                  Package 1
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2 ">
                  - Manicure
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2 ">
                  - Pedicure
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2 ">
                  - Robe to wear on the day
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2 ">
                  - Tattoo - 1 per child
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2">
                  - Photo booth
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2">
                  - Gift Bag to take home
                </li>
              </div>
              <br />
              <p className=" main-welcome text-md sm:text-xl md:text-2xl text-pink-600 font-bold mt-2 ">
                £25 per girl - 1.5hrs
              </p>

              <Link href="/contact">
                <button className="text-[13px] sm:text-[16px] py-2 sm:py-3 text-[#ffffff] font-semibold font-[montserrat] w-32 md:w-44 xl:w-40 rounded-full bg-purple-500 hover:scale-105 ease-in duration-100 mt-8 mb-4">
                  book a party
                </button>
              </Link>
            </ul>
            {/* right items */}
            <ul className="flex flex-col sm:pr-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-start sm:justify-between">
                <li className="main-welcome text-lg sm:text-xl md:text-4xl text-pink-500 font-bold mt-2 ">
                  Package 2
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2 ">
                  - Manicure
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2 ">
                  - Pedicure
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2 ">
                  - Robe to wear on the day
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2 ">
                  - Tattoo - 1 per child
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2">
                  - Photo booth
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2">
                  - Gift Bag to take home
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2 ">
                  - Make a flower crown to take home
                </li>
              </div>
              <div className=" flex justify-between items-end">
                <li className="main-welcome text-md sm:text-xl md:text-2xl 2xl:text-[27px] text-pink-500 font-medium mt-2">
                  - Snacks and cold drinks
                </li>
              </div>
              <p className="main-welcome text-md sm:text-xl md:text-2xl text-pink-600 font-bold mt-2 sm:mt-6">
                £35 per girl - 2hrs
              </p>
            </ul>
          </div>
          {/* Photo Gallery */}
          <div className="mr-1 ml-2 pt-3 xl:pt-0 sm:mr-4 grid grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3  ">
            <Image
              src={pamper5}
              alt="a little girl at a pamper party. party by Nails by michelle in Cheddar"
              width="250px"
              height="250px"
              className="rounded-md"
              priority
            />
            <Image
              src={pamper3}
              alt="food supplied by nails by michelle, nail salon in cheddar"
              width="250px"
              height="250px"
              className="rounded"
              priority
            />
            <Image
              src={pamper4}
              alt="food supplied by nails by michelle for a pamper party"
              width="250px"
              height="250px"
              className="rounded"
              priority
            />

            <Image
              src={pamper6}
              alt="decor for a pamper party - nails by michelle, nail salon in cheddar"
              width="250px"
              height="250px"
              className="rounded"
              priority
            />
            <Image
              src={pamper2}
              alt="decor for a pamper party - nails by michelle, nail salon in cheddar"
              width="250px"
              height="250px"
              className="rounded"
              priority
            />
            <Image
              src={pamper1}
              alt="make a crown at a pamper party by Nails by michelle, nail salon in cheddar"
              width="250px"
              height="250px"
              className="rounded"
              priority
            />
          </div>
        </ul>
      </div>

      <Footer />
    </>
  );
}
