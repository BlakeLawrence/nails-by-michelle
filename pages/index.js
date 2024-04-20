import Head from "next/head";
import Link from "next/link";
import Services from "../components/Services.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer";

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
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nails-by-michelle.netlify.app/"
        />
        <meta property="og:site_name" content="Nails By Michelle" />
        <meta
          property="og:title"
          content="Nails By Michelle | Home. Nail Salon in Cheddar, Somerset"
        />
        <meta
          property="og:description"
          content="Nails by Michelle is my nail salon in Cheddar. I offer nail treatments at great prices. Nails by Michelle is situated in the heart of Cheddar, Somerset."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dnui98kxa/image/upload/v1665417554/OG_Image_-_home_page_a2shpy.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* google search console tag for verification puirposes */}
        <meta
          name="google-site-verification"
          content="knpJraL--4zC6lZCJG1FsKU0AIL2gJTN_DEZ9YgEnZU"
        />

        {/* Link Tag */}
        <link rel="icon" href="/logo.svg" />
      </Head>
      {/* Main Hero div */}

      <main className="  flex w-full bg-[url('/hand.jpg')] h-[450px] sm:h-[550px] bg-no-repeat bg-center bg-cover ">
        {/* Heading and buttons div */}
        <div className="flex flex-col p-8 pt-12 sm:p-24 ">
          <h1 className="main-welcome text-3xl sm:text-5xl lg:text-7xl font-bold font-[montserrat] text-[#f793dc] drop-shadow-lg">
            Relax, Indulge <br /> and Spoil Yourself...
          </h1>
          {/* buttons div */}
          <div className="scroll-smooth mt-10 sm:mt-24">
            <Link href="#services">
              <button className="text-[11px] sm:text-[16px] py-3 mr-4 sm:mr-6 text-[#ffffff] font-semibold font-[montserrat] w-20 md:w-28 rounded-full bg-purple-400 hover:scale-110 ease-in duration-100">
                Services
              </button>
            </Link>
            <Link href="https://www.fresha.com/a/nails-by-michelle-cheddar-bath-street-cd78i7xy?pId=749479">
              <a target="_blank">
                <button className="text-[11px] sm:text-[16px] py-3 text-purple-400 border-[1px] font-semibold font-[montserrat] w-20 md:w-28 border-purple-400 rounded-full bg-[#ffffff] dark:bg-slate-800 hover:scale-110 ease-in duration-100">
                  Prices
                </button>
              </a>
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
