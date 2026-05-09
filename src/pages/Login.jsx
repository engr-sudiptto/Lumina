import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import group from '../assets/hiking.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Navbar />

      <section className="flex flex-col w-full h-auto items-center justify-center m-auto gap-10 lg:h-screen xl:flex-row xl:gap-0 xl:pt-30 xl:w-[80%] xl:mb-30 xl:h-175 xl:items-start ">
        <div className="flex gap-2 flex-col w-full xl:h-156 xl:max-w-150 xl:shadow-xl xl:pb-3">
          <img
            className="w-full h-80 object-cover sm:h-100 lg:h-auto xl:h-full"
            src={group}
            alt="Group image"
          />
          <h3 className="text-2xl text-center">Strength in Unity.</h3>
        </div>

        <form className=" w-[95%] max-w-150 h-auto p-3 bg-blue-50 rounded-xl mb-10 sm:px-15 sm:py-5 xl:h-156 xl:rounded-none content-center">
          <h2 className="text-2xl text-center mt-2">Login Now</h2>
          <p className="text-sm text-center mt-2">
            Explore the things you love.
          </p>

          <label className="text-sm block my-3 text-gray-500">
            User Name or Email
          </label>
          <input
            className="w-full h-12 border px-4 text-sm rounded-lg border-blue-400 text-blue-600 outline-0"
            type="text"
            placeholder="Enter user name or email"
          />

          <label className="text-sm block my-3 text-gray-500">Password</label>
          <input
            className="w-full h-12 border px-4 text-sm rounded-lg border-blue-400 text-blue-600 outline-0"
            type="password"
            placeholder="Enter password"
          />
          <Link to='/reset-password' className='text-sm text-blue-400 block text-right mt-2 hover:underline'>Forgot password?</Link>
          <button
            className="w-full h-12 bg-blue-300 block my-3 rounded-lg mt-6 cursor-pointer"
            type="submit"
          >
            Login
          </button>
          <span className="block w-[95%] m-auto h-px bg-blue-200 mt-5"></span>
          <p className="text-center mt-6 mb-3 text-gray-400 text-sm">
            Don't have an account?
            <Link to="/register" className="text-base text-blue-400 underline">
              Register Now
            </Link>
          </p>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
