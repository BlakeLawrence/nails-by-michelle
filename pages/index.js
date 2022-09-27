import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nails By Michelle | Home </title>
        <meta
          name="home"
          content="Nails By Michelle - Cheddar's premium nail Salon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-center"></div>
    </div>
  );
}
