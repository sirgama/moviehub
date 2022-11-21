import React from "react";
import Logo from "../assets/logo.svg";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="p-4 bg-black rounded-lg shadow md:px-6  dark:bg-gray-900 mt-20">
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://movies.sirgama.dev.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={Logo} className="mr-3 h-8" alt="MovieHub Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>

          <span className="block text-sm text-gray-500 sm:text-center font-bold dark:text-gray-400">
            © 2022{" "}
            <a href="https://movies.sirgama.dev/" className="hover:underline">
              MovieHub by SirGama™
            </a>
          </span>
          <ul className="flex flex-wrap items-end mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://t.me/sirgama"
                target="_blank"
                className="p-4 sm:mr-10 text-3xl mx-6"
              >
                <FaTelegram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/sirgama_"
                target="_blank"
                className=" sm:mr-10 p-4 text-3xl mx-10"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
