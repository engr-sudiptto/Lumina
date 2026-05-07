import React from 'react';
import Navbar from '../components/Navbar';
import luminaHeroImage from '../assets/lumina-hero.jpg';
import community from '../assets/comunity.png';
import support from '../assets/support.png';
import content from '../assets/content.png';
import himaloy from '../assets/himaloy.jpg'
import hiking from '../assets/hiking.jpg'
import groupHiking from '../assets/group-hiking.jpg'
import iceHome from '../assets/ice-home.jpg'
import group from '../assets/group.jpg'
import selfie from '../assets/selfie.jpeg'
import selfie2 from '../assets/selfie2.jpeg'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {

  const recentHighligtArray = [
    {
      image: himaloy,
      headline: 'The Silence of the Giants.',
      bio: 'A breathtaking view of snow-capped peaks piercing the blue horizon. This landscape invites a moment of reflection on the raw, untouched beauty of the high mountains.',
    },
    {
      image: hiking,
      headline: 'Strength in Unity.',
      bio: "Scaling steep terrains is never a solo mission. This shot captures the essential bond of trust and teamwork required to overcome nature's greatest challenges.",
    },
    {
      image: iceHome,
      headline: "A Winter's Glow.",
      bio: 'Tucked away in a snowy valley, this warm wooden lodge offers a cozy escape from the freezing elements. It is the perfect picture of comfort and tranquility in a winter wonderland.',
    },
    {
      image: groupHiking,
      headline: 'At the Peak of the World.',
      bio: "Standing tall against the morning sun, this group of adventurers celebrates reaching the summit. It's a powerful reminder of the rewards that wait at the end of a long journey.",
    },
    {
      image: group,
      headline: 'Friends Without Borders.',
      bio: 'A vibrant gathering of friends capturing a moment of pure, unscripted happiness. This image celebrates the diversity and energy that come with true companionship.',
    },
  ];

  return (
    <div className="overflow-x-clip">
      <Navbar />

      {/* hero section  */}
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
          className="block w-40 h-11 bg-blue-300 m-auto mt-8 text-center content-center rounded-lg font-semibold hover:bg-blue-400/50 hover:text-slate-600"
        >
          Join Us
        </Link>
      </div>

      {/* ============ found section ============  */}
      <div className="flex flex-col-reverse m-auto mb-10 sm:grid sm:grid-cols-2 w-full max-w-190 ">
        <div className="p-5 mt-18">
          <h2 className="text-4xl text-gray-700">
            Founded in 2024 to Fix social Media.
          </h2>
          <p className="text-sm mt-3 text-gray-500 ">
            Lumina was born out of frustration. As developers, we saw how social
            media was becoming toxic, cluttered, and data-hungry. We decided to
            build a solution.
          </p>
          <p className="text-sm mt-3 text-gray-500 ">
            Our mission is to create a decentralized feel with a centralized
            ease of use. We are constantly improving our algorithms to ensure
            they serve the user, not the advertisers.
          </p>
        </div>
        <div className="grid grid-cols-2 p-5 w-full max-w-125 gap-2 h-75">
          <div className="flex flex-col gap-2 mt-10">
            <img className="w-full h-55 object-cover rounded-xl" src={selfie} />
            <span className="w-full h-20 text-center content-center bg-blue-500 rounded-xl text-white font-semibold text-lg">
              Engage.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="w-full h-20 text-center content-center bg-indigo-500 rounded-xl text-white font-semibold text-lg">
              Collaborate.
            </span>
            <img
              className="w-full h-55 object-cover rounded-xl"
              src={selfie2}
            />
          </div>
        </div>
      </div>
      <Link
        to="/login"
        className="w-50 h-12 border-2 border-blue-300 text-blue-300 font-semibold text-center content-center rounded-xl m-auto block mb-15 mt-10 sm:mb-20 xl:mb-25 2xl:mb-30 sm:mt-20 hover:bg-blue-300 hover:text-gray-700 hover:shadow-[0_10px_10px_#00000030] hover:-translate-y-2 duration-150"
      >
        Login Now
      </Link>

      <div className="flex flex-col gap-5 items-center justify-center sm:flex-row sm:gap-3 sm:p-5 xl:w-3/4 xl:m-auto xl:gap-5 2xl:w-2/3">
        <div className="w-4/5 rounded-xl h-60 py-5 bg-gray-100 flex flex-col items-center justify-center">
          <h3 className="text-xl mb-5 font-semibold">Our Content</h3>
          <img className="w-30" src={content} />
          <Link className="w-30 h-8 border border-blue-300 text-blue-300 mt-5 text-center content-center rounded text-sm font-semibold">
            Learn More
          </Link>
        </div>
        <div className="w-4/5 rounded-xl h-60 py-5 bg-gray-100 flex flex-col items-center justify-center">
          <h3 className="text-xl mb-5 font-semibold">Our Community</h3>
          <img className="w-30" src={community} />
          <Link className="w-30 h-8 border border-blue-300 text-blue-300 mt-5 text-center content-center rounded text-sm font-semibold">
            Learn More
          </Link>
        </div>
        <div className="w-4/5 rounded-xl h-60 py-5 bg-gray-100 flex flex-col items-center justify-center">
          <h3 className="text-xl mb-5 font-semibold">24/7 Support</h3>
          <img className="w-30" src={support} />
          <Link className="w-30 h-8 border border-blue-300 text-blue-300 mt-5 text-center content-center rounded text-sm font-semibold">
            Learn More
          </Link>
        </div>
      </div>

      {/* recent highlights */}
      <h2 className="text-center text-4xl mb-10 mt-15 text-gray-600">
        Recent Highlights
      </h2>
      <div className="grid gap-5 p-3 sm:grid-cols-2 lg:grid-cols-6 justify-center w-full max-w-300 m-auto">
        {recentHighligtArray.map((item, index) => (
          <div
            key={index}
            className={`w-full max-w-100 lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''} ${index >= 3 ? 'mt-5' : ''} `}
          >
            <img
              className="w-full h-auto object-cover sm:h-50"
              src={item.image}
              alt={item.headline}
            />
            <h3 className="text-lg font-semibold p-1 text-gray-600">
              {item.headline}
            </h3>
            <p className="text-sm pl-1 text-gray-500">{item.bio}</p>
          </div>
        ))}
      </div>

      {/* call to action section  */}
      <section className="bg-linear-to-tr from-[#111827] via-[#1e3a8a] to-[#111827] py-5 sm:py-10 lg:p-10 mt-5">
        <div className="w-[90%] max-w-180 m-auto bg-blue-500/20 p-5 rounded-2xl backdrop:blur-2xl sm:p-10">
          <h3 className="text-3xl text-white font-semibold">
            Ready to Experience{' '}
            <span className="text-blue-300 text-4xl leading-13">Lumina</span>
          </h3>
          <p className="text-gray-400 text-sm">
            Join a high-performance social ecosystem built for speed and
            security. Experience the future of front-end architecture today.
          </p>
          <div className="sm:flex sm:items-center sm:gap-10 sm:mt-7">
            <Link
              to="/register"
              className="block w-50 h-11 bg-blue-300 mt-8 text-center content-center rounded-lg font-semibold cursor-pointer text-slate-800 sm:m-0 hover:bg-blue-400/50 hover:text-gray-200"
            >
              Get Started for Free
            </Link>
            <Link
              to="/login"
              className="block w-40 h-11 border border-blue-300 text-blue-300 mt-4 text-center content-center rounded-lg font-semibold cursor-pointer sm:m-0 hover:border-none hover:bg-blue-400/50 hover:text-gray-200"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* footer section  */}
      <Footer />
    </div>
  );
};

export default Home;
