import React, { useState } from 'react';
import siteLogo from '../assets/lumina.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-x-clip">
      <section className="flex items-center justify-between w-full h-13 px-5 lg:px-15 lg:h-15 xl:px-25 xl:h-25 2xl:px-35">
        <Link to="/" className="w-30 h-10 xl:w-40 xl:h-13 cursor-pointer">
          <img className="w-30 xl:w-40" src={siteLogo} alt="site-logo" />
        </Link>
        <nav>
          {/* Hamburger Icon (Open Menu) */}
          <svg
            onClick={() => setIsOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-6 lg:hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>

          {/* Overlay for main menu */}
          <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 bg-black/20 backdrop-blur-xs transition-all duration-700 z-40 ${isOpen ? 'opacity-100 visible lg:hidden' : 'opacity-0 invisible lg:hidden'}`}
          ></div>

          <ul
            className={`flex flex-col gap-7 h-screen w-65 fixed top-0 p-10 bg-linear-to-br from-cyan-200 via-sky-300 to-teal-700 transition-right duration-700 ease-in-out z-100 ${isOpen ? 'right-0 sm:right-0' : '-right-65 sm:-right-80'} sm:w-80 lg:relative lg:flex-row lg:h-full lg:top-0 lg:left-0 lg:right-0 lg:w-full lg:items-center lg:justify-center lg:gap-15 lg:p-0 lg:bg-none`}
          >
            {/* Close Cross Icon */}
            <svg
              onClick={() => setIsOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="size-7 lg:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <Link
              to="/"
              className="font-semibold lg:text-[15px] group relative lg:text-teal-700 2xl:text-[17px]"
            >
              Home
              {/* left to right hover animation */}
              <span className=" absolute left-0 bottom-0 w-full h-0.5 bg-teal-600 transition-transform duration-300 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
            </Link>
            <Link
              to="/about"
              className="font-semibold lg:text-[15px] group relative lg:text-teal-700 2xl:text-[17px]"
            >
              About
              {/* left to right hover animation */}
              <span className=" absolute left-0 bottom-0 w-full h-0.5 bg-teal-600 transition-transform duration-300 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
            </Link>
            <Link
              to="/blog"
              className="font-semibold lg:text-[15px] group relative lg:text-teal-700 2xl:text-[17px]"
            >
              Blog
              {/* left to right hover animation */}
              <span className=" absolute left-0 bottom-0 w-full h-0.5 bg-teal-600 transition-transform duration-300 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
            </Link>
            <Link to='/login' className="font-semibold w-full h-10 bg-white text-center content-center mt-10 rounded-lg lg:m-0 lg:bg-linear-to-br lg:from-cyan-200 lg:via-sky-200 lg:to-teal-500 lg:w-30 lg:text-[15px] lg:hover:bg-linear-to-br lg:hover:from-cyan-200 lg:hover:via-sky-300 lg:hover:to-teal-700 lg:transition-all lg:duration-500 2xl:w-40 2xl:text-[17px]">
              Login
            </Link>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
