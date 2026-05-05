import React from 'react'
import { Link } from 'react-router-dom';
import luminaLogo from '../assets/lumina.png'

const Footer = () => {
  const navLinks = [
    'About',
    'Help',
    'Press',
    'API',
    'Jobs',
    'Privacy',
    'Terms',
    'Locations',
    'Lumina Lite',
  ];
  return (
    <div>
      <footer className="bg-linear-to-r from-[#111827] to-[#1e3a8a] pb-5">
        <div className="flex gap-5 flex-wrap px-10 items-center justify-center pt-10">
          {navLinks.map((link, index) => (
            <Link key={index} className="text-gray-300 text-sm group relative hover:text-teal-600">
              {link}
              {/* left to right hover animation */}
              <span className=" absolute left-0 bottom-0 w-full h-px bg-teal-600 transition-transform duration-300 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center mt-7 gap-2">
          <span className="w-10 h-px bg-gray-400 block"></span>
          <p className="text-gray-400 text-xs uppercase tracking-wider">
            Powered by Sudipto Das
          </p>
          <span className="w-10 h-px bg-gray-400 block"></span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-5">
          <img className="w-25" src={luminaLogo} alt="Lumina logo" />
          <p className="text-gray-400 text-xs">
            | © 2026 Lumina App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer