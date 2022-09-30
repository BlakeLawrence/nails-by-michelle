import Head from "next/head";
import prices from "./data/prices";
import PriceItem from "./components/PriceItem.jsx";

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
      <div className="p-6 pt-12 sm:pt-18 sm:pl-24 bg-pink-100">
        <h3 className="main-welcome text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f793dc] drop-shadow-lg">
          Prices...
        </h3>
        {/* Pricing card */}
        <div className="flex pb-24 justify-center w-full bg-pink-100">
          <div className="w-7/12 p-6 rounded-xl bg-pink-200 shadow-lg shadow-pink-300">
            <ul>
              {prices.map((price, index) => (
                <PriceItem key={index} price={price} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
