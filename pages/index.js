import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nails By Michelle</title>
        <meta
          name="home"
          content="Nails By Michelle - Cheddar's best nail Salon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
