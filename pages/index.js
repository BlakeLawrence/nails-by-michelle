import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nails By Michelle | Home </title>
        <meta
          name="home"
          content="Nails By Michelle - Cheddar's premium nail Salon"
        />
        <link rel="icon" href="/nail-polish.svg" />
      </Head>
      <div className=" flex w-full bg-[url('/hand.jpg')] h-[400px] sm:h-[550px] bg-no-repeat bg-center bg-cover ">
        <h3 className="p-20 text-6xl font-bold font-[montserrat] text-[#ff91e2]">
          COME IN, TREAT YOURSELF!!
        </h3>
      </div>
      <div className="w-full h-screen"></div>
    </div>
  );
}
