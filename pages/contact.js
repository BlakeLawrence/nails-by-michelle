import Head from "next/head";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Nails By Michelle | Contact </title>
        <meta name="contact" content="Nails By Michelle - Contact page" />
        <link rel="icon" href="/flower-logo.png" />
      </Head>
      {/* main contact card */}
      <div className="flex flex-col sm:flex-row w-full justify-evenly h-full pt-8 sm:pt-16">
        <div className="w-full md:w-1/3 flex flex-col items-center bg-gray-200">
          <h3 className="main-welcome text-pink-300 text-6xl">Contact</h3>
          <h4>hi</h4>
          <h4>hi</h4>
          <h4>hi</h4>
        </div>
        <div className="h-3/4 border-r-2 border-pink-300 items-center justify-center mt-1 "></div>
        <div name="contact" className="pb-16 w-11/12 md:w-1/3 p-4">
          <form method="POST" action="" className="flex flex-col w-full">
            <div className="flex flex-col p-6 rounded-lg bg-pink-300">
              <label className="text-white font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="p-2 rounded-md focus:outline-none bg-gray-200"
                type="text"
                name="name"
                required
              />
              <label className="text-white font-semibold mt-2" htmlFor="email">
                Email
              </label>
              <input
                className=" p-2 rounded-md focus:outline-none bg-gray-200"
                type="email"
                name="email"
                required
              />
              <label
                className="mt-2 text-white font-semibold"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="p-2 rounded-md focus:outline-none bg-gray-200"
                name="message"
                rows="6"
                required
              ></textarea>

              <button className="text-pink-400 rounded-md bg-white border-[2px] border-pink-200  px-4 py-2 my-6 mx-auto flex items-center font-semibold hover:scale-105 ">
                Submit
              </button>
            </div>
            {/* social icons */}

            <div
              name="socials"
              className="sm:hidden flex justify-center left-1 mt-12"
            >
              <ul className="flex">
                <li className="flex flex-col items-center justify-center">
                  <a
                    className="flex items-center text-gray-300 font-semibold"
                    href="https://www.linkedin.com/in/blake-lawrence83/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook size={30} />
                  </a>
                  <p className="text-gray-300">LinkedIn</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <a
                    className="flex items-center text-gray-300 font-semibold"
                    href="https://github.com/BlakeLawrence"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram size={30} />
                  </a>
                  <p className="text-gray-300">GitHub</p>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
