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
      {/* Main Hero div */}
      <div className=" flex w-full bg-[url('/hand.jpg')] h-[400px] sm:h-[550px] bg-no-repeat bg-center bg-cover ">
        {/* Heading and buttons div */}
        <div className="flex flex-col p-8 pt-12 sm:p-24 ">
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg">
            GO ON, TREAT YOURSELF!
          </h3>
          {/* buttons div */}
          <div className="mt-6 sm:mt-16">
            <button className="text-[11px] sm:text-[14px] px-4 py-3 mr-6 text-[#ffffff] font-medium font-[montserrat] md:w-32 rounded-full bg-purple-400 hover:scale-110">
              SERVICES
            </button>
            <button className="text-[11px] sm:text-[14px] px-4 py-3 text-purple-400 border-[1px] font-medium font-[montserrat] md:w-32 border-purple-400 rounded-full bg-[#ffffff] hover:scale-110">
              PRICES
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen"></div>
    </div>
  );
}
