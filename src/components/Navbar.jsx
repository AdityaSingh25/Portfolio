import logo from "../assets/logo.png";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-transparent">
      <div className="flex flex-shrink-0 items-center">
        <p className="ml-4 text-4xl font-bold tracking-wide text-white">ADI</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://linkedin.com/in/adinarayan25/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-gray-400 transition-colors duration-200" />
        </a>
        <a href="https://github.com/AdityaSingh25" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-colors duration-200" />
        </a>
        <a href="https://x.com/AdiNarayan25" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="hover:text-gray-400 transition-colors duration-200" />
        </a>
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
