import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import group from '../assets/group.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userNameValue, setUserNameValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const handleChange = e => {
    const value = e.target.value;
    const lowercaseValue = value.toLowerCase().trim();

    if (lowercaseValue.length <= 20 || lowercaseValue === '') {
      setUserNameValue(lowercaseValue);

      const regex = /^[a-zA-Z0-9_]*$/;
      if (regex.test(lowercaseValue)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  };

  return (
    <div>
      <Navbar />

      <section className="flex flex-col w-full h-auto items-center justify-center m-auto gap-10 lg:h-screen xl:flex-row xl:gap-0 xl:pt-30 xl:w-[80%] xl:mb-30 xl:h-175 xl:items-start ">
        <div className="flex gap-2 flex-col w-full xl:h-157 xl:max-w-150 ">
          <img
            className="w-full h-80 object-cover sm:h-100 lg:h-auto xl:h-full"
            src={group}
            alt="Group image"
          />
          <h3 className="text-2xl text-center">Friends Without Borders.</h3>
        </div>

        <form className=" w-[95%] max-w-150 h-auto p-3 bg-blue-50 rounded-xl mb-10 sm:px-15 sm:py-5">
          <h2 className="text-2xl text-center mt-2">Register Now</h2>
          <p className="text-sm text-center mt-2">
            Explore the things you love.
          </p>
          <label className="text-sm block my-3 text-gray-500">Your Name</label>
          <input
            className="w-full h-12 border px-2 text-sm rounded-lg border-blue-400 text-blue-600 outline-0"
            type="text"
            placeholder="Enter your name"
          />
          <label className="text-sm block my-3 text-gray-500">User Name</label>
          <input
            value={userNameValue}
            onChange={handleChange}
            className="w-full h-12 border px-2 text-sm rounded-lg border-blue-400 text-blue-600 outline-0"
            type="text"
            placeholder="Your user name"
          />

          {isValid ? (
            <p
              className={`${userNameValue === '' ? 'hidden' : 'block'} text-sm text-gray-600`}
            >
              your user name will be{' '}
              <span className={`${isValid ? 'text-gray-500' : 'text-red-400'}`}>
                @{userNameValue}
              </span>{' '}
            </p>
          ) : (
            <p className={`'block text-sm text-red-400`}>
              Only letters, numbers, and "_" are allowed!
            </p>
          )}

          <label className="text-sm block my-3 text-gray-500">
            Email Address
          </label>
          <input
            className="w-full h-12 border px-2 text-sm rounded-lg border-blue-400 text-blue-600 outline-0"
            type="email"
            placeholder="Your email Address"
          />
          <label className="text-sm block my-3 text-gray-500">Password</label>
          <input
            className="w-full h-12 border px-2 text-sm rounded-lg border-blue-400 text-blue-600 outline-0"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="w-full h-12 bg-blue-300 block my-3 rounded-lg mt-6"
            type="submit"
          >
            Submit
          </button>
          <span className='block w-[95%] m-auto h-px bg-blue-200 mt-5'></span>
          <p className='text-center mt-6 mb-3 text-gray-400 text-sm'>You already have an account. <Link to='/login' className='text-base text-blue-400 underline'>Login Now</Link> </p>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
