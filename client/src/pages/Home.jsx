import React from 'react';
import Navbar from '../components/Navbar';
import luminaHeroImage from '../assets/lumina-hero.png';
import community from '../assets/comunity.png';
import support from '../assets/support.png';
import content from '../assets/content.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <div className="w-full relative h-80 sm:h-135 lg:h-180 xl:h-screen">
        <img
          className="w-full h-full object-cover"
          src={luminaHeroImage}
          alt="hero image"
        />
        <span className="w-full h-50 sm:h-75 lg:h-100 xl:h-105 block absolute left-0 -bottom-10 z-10 bg-linear-to-t from-white via-slate-50 to-transparent"></span>
      </div>


      <div className="relative z-15 bottom-7 lg:bottom-15 xl:bottom-20">
        <h1 className="w-[90%] m-auto text-center font-bold text-2xl tracking-wider text-gray-700 sm:text-4xl sm:w-[70%]">
          ILLUMINATING YOUR POTENTIAL
        </h1>
        <p className="text-center w-[90%] m-auto mt-3 text-gray-500">
          Connect with a community that empowers, creates and loghts the way
        </p>
        <Link
          to="/register"
          className="block w-40 h-11 bg-blue-300 m-auto mt-8 text-center content-center rounded-lg font-semibold"
        >
          Join Us
        </Link>
      </div>


      <div className='flex flex-col gap-5 items-center justify-center sm:flex-row sm:gap-3 sm:p-5 xl:w-3/4 xl:m-auto xl:gap-5 2xl:w-2/3'>
        <div className="w-4/5 rounded-xl h-60 py-5 bg-gray-100 flex flex-col items-center justify-center">
          <h3 className='text-xl mb-5 font-semibold'>Our Content</h3>
          <img className="w-30" src={content} />
          <Link className='w-30 h-8 border border-blue-300 text-blue-300 mt-5 text-center content-center rounded text-sm font-semibold'>Learn More</Link>
        </div>
        <div className="w-4/5 rounded-xl h-60 py-5 bg-gray-100 flex flex-col items-center justify-center">
          <h3 className='text-xl mb-5 font-semibold'>Our Community</h3>
          <img className="w-30" src={community} />
          <Link className='w-30 h-8 border border-blue-300 text-blue-300 mt-5 text-center content-center rounded text-sm font-semibold'>Learn More</Link>
        </div>
        <div className="w-4/5 rounded-xl h-60 py-5 bg-gray-100 flex flex-col items-center justify-center">
          <h3 className='text-xl mb-5 font-semibold'>24/7 Support</h3>
          <img className="w-30" src={support} />
          <Link className='w-30 h-8 border border-blue-300 text-blue-300 mt-5 text-center content-center rounded text-sm font-semibold'>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
