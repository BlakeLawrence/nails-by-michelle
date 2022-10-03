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
        <title>Nails By Michelle | Home </title>
        <meta
          name="home"
          content="Nails By Michelle - Cheddar's premium nail Salon"
        />
        <link rel="icon" href="/flower-logo.png" />
      </Head>
      {/* Main Hero div */}
      <div className="  flex w-full bg-[url('/hand.jpg')] h-[450px] sm:h-[550px] bg-no-repeat bg-center bg-cover ">
        {/* Heading and buttons div */}
        <div className="flex flex-col p-8 pt-12 sm:p-24 ">
          <motion.h3
            animate={{ x: 0, y: 0, scale: 1, rotate: 0 }}
            className="main-welcome text-3xl sm:text-5xl lg:text-7xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg"
          >
            Hello and welcome <br /> To my salon..
          </motion.h3>
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
      </div>
      <div className="w-full h-screen">
        <About />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
