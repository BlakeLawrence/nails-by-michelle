import Head from "next/head";
import Link from "next/link";
import Services from "../components/Services.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        {/* title and description tags */}
        <title>Nails By Michelle | Home. Nail Salon in Cheddar, Somerset</title>
        <meta name="home" content="Nails By Michelle - Home page" />
        <meta
          name="description"
          content="Nails by Michelle is my nail salon in Cheddar. I offer amazing nail services in Cheddar at great prices.Services include Manicures, Pedicures, Kids Manicures, Kids Pedicures, Pamper Parties and a range of eye lash services. Nails by Michelle is situated in the heart of Cheddar, Somerset."
        />
        <meta
          name="keywords"
          content="nail salon cheddar, nail salon in cheddar, nail salons in cheddar, manicure cheddar, manicures in cheddar, pedicures cheddar, pedicures in cheddar, nails for kids in cheddar, childrens pedicures cheddar, childrens manicures cheddars, girls pedicures cheddar, girls manicure cheddar, eye lash extensions cheddar, eye lashes cheddar, nail gel cheddar, pamper parties cheddar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        {/* open graph tags */}
        <meta
          property="og:url"
          content="https://nails-by-michelle.netlify.app/"
        />
        <meta
          property="og:title"
          content="Nails By Michelle | Home. Nail Salon in Cheddar, Somerset"
        />
        <meta
          property="og:description"
          content="Nails by Michelle is my nail salon in Cheddar. I offer amazing nail treatments at great prices. Nails by Michelle is situated in the heart of Cheddar, Somerset."
        />

        {/* Link Tag */}
        <link rel="icon" href="/logo.svg" />
      </Head>
      {/* Main Hero div */}

      <main className="  flex w-full bg-[url('/hand.jpg')] h-[450px] sm:h-[550px] bg-no-repeat bg-center bg-cover ">
        {/* Heading and buttons div */}
        <div className="flex flex-col p-8 pt-12 sm:p-24 ">
          <motion.h1
            animate={{ x: 0, y: 0, scale: 1, rotate: 0 }}
            className="main-welcome text-3xl sm:text-5xl lg:text-7xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg"
          >
            Relax, Indulge <br /> and spoil yourself...
          </motion.h1>
          {/* buttons div */}
          <div className="scroll-smooth mt-10 sm:mt-24">
            <Link href="#services" spy={true} smooth={true} duration={500}>
              <button className="text-[11px] sm:text-[16px] py-3 mr-4 sm:mr-6 text-[#ffffff] font-semibold font-[montserrat] w-20 md:w-28 rounded-full bg-purple-400 hover:scale-110 ease-in duration-100">
                Services
              </button>
            </Link>
            <Link href="/price-list">
              <button className="text-[11px] sm:text-[16px] py-3 text-purple-400 border-[1px] font-semibold font-[montserrat] w-20 md:w-28 border-purple-400 rounded-full bg-[#ffffff] hover:scale-110 ease-in duration-100">
                Prices
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className="w-full h-screen">
        <About />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
