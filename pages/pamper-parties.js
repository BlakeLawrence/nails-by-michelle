import Head from "next/head";
import Footer from "../components/Footer";

export default function Pamper() {
  return (
    <>
      <Head>
        <title>Nails By Michelle | Pamper Parties </title>
        <meta
          name="pamper-parties"
          content="Nails By Michelle - Pamper Parties...treat your kiddies to a day of spoils"
        />
        <link rel="icon" href="/flower-logo.png" />
      </Head>
      <div className="h-screen w-full"></div>
      <Footer />
    </>
  );
}
