import Image from "next/image";
import Link from "next/link";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full h-[6rem] sm:h-[10rem] px-1 sm:px-4 bg-[#ffffff] dark:bg-slate-800 border-t-[3px] border-pink-200">
      {/* Logo */}
      <div className="flex flex-row h-auto w-1/4 sm:w-56">
        <div className=" h-10 w-10 sm:h-20 sm:w-20 relative ml-3 sm:ml-8 pt-1 md:pt-1">
          <Link href="/">
            <Image
              className="hover:cursor-pointer"
              src="/logo.svg"
              alt="flower logo for nails by michelle, nail salon in cheddar, somerset"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
      {/* Built by and copyright */}
      <div className="mt-3 sm:mt-6 text-center">
        <span className="text-pink-400 text-xs sm:text-xl mr-4 font-medium">
          <a
            href="https://nails-by-michelle.netlify.app/"
            target="blank"
            className="text-pink-400"
            aria-label="a link to the website creators development portfolio"
          >
            Nails by Michelle
          </a>
        </span>
        <p className="text-[.5rem] sm:text-lg text-pink-400 mr-4">
          Copyright &copy; 2023
        </p>
      </div>
      {/* Social Icons*/}
      <div className="flex flex-row h-auto w-1/4 sm:w-48 justify-evenly">
        <div className="item w-6 h-6 sm:w-10 sm:h-8 sm:m2">
          <a
            href="https://www.facebook.com/profile.php?id=100084402441658"
            target="blank"
            rel="noreferrer"
            aria-label="a link to the business's facebook page"
          >
            <AiFillFacebook className="h-6 w-6 sm:h-8 sm:w-8 rounded-md text-pink-400 hover:scale-125 ease-in duration-100" />
          </a>
        </div>
        <div className="item w-6 h-6 sm:w-10 sm:h-8">
          <a
            href="https://instagram.com/nails_by_michelle85?igshid=YmMyMTA2M2Y="
            target="blank"
            rel="noreferrer"
            aria-label="a link to the business's instagram page"
          >
            <AiFillInstagram className="h-6 w-6 sm:h-8 sm:w-8 rounded-md mr-4 text-pink-400 hover:scale-125 ease-in duration-100" />
          </a>
        </div>
      </div>
    </footer>
  );
}
