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
      <div className="w-full h-screen">
        <div
          name="contact"
          className="pb-16  flex justify-center items-center p-4"
        >
          <form
            method="POST"
            action="mailto:blake-lawrence@hotmail.co.uk"
            enctype="text/plain"
            className="flex flex-col w-1/3"
          >
            <div className="flex flex-col p-6 rounded-lg bg-pink-300">
              <label className="text-white" htmlFor="name">
                Name
              </label>
              <input
                className="p-2 rounded-md focus:outline-none bg-gray-200"
                type="text"
                name="name"
                required
              />
              <label className="text-white mt-2" htmlFor="email">
                Email
              </label>
              <input
                className=" p-2 rounded-md focus:outline-none bg-gray-200"
                type="email"
                name="email"
                required
              />
              <label className="mt-2 text-white" htmlFor="message">
                Message
              </label>
              <textarea
                className="p-2 rounded-md focus:outline-none bg-gray-200"
                name="message"
                rows="10"
                required
              ></textarea>

              <button className="text-white rounded-md border-[2px]  px-4 py-2 my-6 mx-auto flex items-center font-semibold hover:scale-105 ">
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
