import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Logo or website name */}
          <Link to="">
            <div className="text-2xl font-semibold mb-2 md:mb-0 logo">
              Rushikesh Thakare
            </div>
          </Link>
          {/* Navigation links */}
          <nav className="md:flex md:space-x-4">
            <Link to="about">
              <span className="hover:text-gray-300">About</span>
            </Link>
            <Link to="contact">
              <span className="hover:text-gray-300">Contact</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
