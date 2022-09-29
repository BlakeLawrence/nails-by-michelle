import Image from "next/image";
import { BsHeart } from "react-icons/bs";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full h-[6rem] sm:h-[10rem] px-1 sm:px-4 bg-[#ffffff] border-t-[3px] border-pink-200">
      {/* Logo */}
      <div className="flex flex-row h-auto w-1/4 sm:w-56">
        <div className="h-10 w-10 sm:h-16 sm:w-16 relative ml-3 sm:ml-8">
          <Image
            src="/nail-polish.svg"
            alt="Project Clean-up logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Built by and copyright */}
      <div className="mt-3 sm:mt-6 text-center">
        <span className="text-pink-400 text-xs sm:text-xl mr-4 font-medium">
          <a
            href="https://blakelawrence-portfolio.netlify.app/"
            target="blank"
            className="text-pink-400"
          >
            Built by Blake Lawrence
          </a>
        </span>
        <p className="text-[.5rem] sm:text-lg text-pink-400 mr-4">
          Copyright &copy; 2022
        </p>
      </div>
      {/* Social Icons*/}
      <div className="flex flex-row h-auto w-1/4 sm:w-56 justify-evenly">
        <div className="item w-6 h-6 sm:w-10 sm:h-8 sm:m2">
          <a
            href="https://www.facebook.com/profile.php?id=100084402441658"
            target="blank"
          >
            <AiFillFacebook className="h-6 w-6 sm:h-8 sm:w-8 rounded-md mr-4 text-pink-400 hover:scale-125" />
          </a>
        </div>
        <div className="item w-6 h-6 sm:w-10 sm:h-8">
          <a href="https://www.instagram.com" target="blank">
            <AiFillInstagram className="h-6 w-6 sm:h-8 sm:w-8 rounded-md mr-4 text-pink-400 hover:scale-125" />
          </a>
        </div>
        <div className="item w-6 h-6 sm:w-10 sm:h-8">
          <a href="https://www.twitter.com" target="blank">
            <AiOutlineTwitter className="h-6 w-6 sm:h-8 sm:w-8 mr-2 rounded-md text-pink-400 hover:scale-125" />
          </a>
        </div>
      </div>
    </footer>
  );
}
