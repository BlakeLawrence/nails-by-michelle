import Head from "next/head";

export default function PriceList() {
  return (
    <div>
      <Head>
        <title>Nails By Michelle | Price List </title>
        <meta
          name="price-list"
          content="Nails By Michelle - Price list...come treat yourself at an affordable price"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl text-blue-400 font-bold">Price List</h1>
    </div>
  );
}
