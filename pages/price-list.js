import Head from "next/head";
import prices from "../lib/prices.js";
import PriceItem from "../components/PriceItem.jsx";
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
      <div
        className="p-6 pt-12 sm:pt-18 sm:pl-24 bg-[url('/flower-background.jpg')]
bg-no-repeat bg-cover"
      >
        {/* Pricing card */}
        <div className="flex pb-32 justify-center w-full ">
          <div className="w-full xl:w-7/12 p-2 sm:p-6 rounded-xl bg-pink-100 shadow-lg shadow-pink-300 ">
            <h3 className="main-welcome text-4xl text-center sm:text-5xl lg:text-6xl font-bold text-[#f793dc] drop-shadow-lg">
              Prices...
            </h3>
            <ul>
              {prices.map((price, index) => (
                <PriceItem key={index} price={price} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
