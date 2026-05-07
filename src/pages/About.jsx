import React from 'react';
import Navbar from '../components/Navbar';
import selfie from '../assets/selfie.jpeg';
import selfie2 from '../assets/selfie2.jpeg';
import Footer from '../components/Footer';

const About = () => {
  const stats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Security Level', value: 'SSL/AES' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Open Source', value: 'GitHub' },
  ];

  const luminaMattersArray = [
    {
      id: 1,
      title: 'Privacy First',
      description:
        'Your data belongs to you. We do not sell your personal information or track your activity across other sites.',
      bg: 'bg-blue-50',
      bgHover: 'hover:bg-blue-100',
      circle: 'bg-blue-600',
    },
    {
      id: 2,
      title: 'Minimalist UI',
      description:
        'Clean, distraction-free interface designed to help you focus on the content that matters most.',
      bg: 'bg-purple-50',
      bgHover: 'hover:bg-purple-100',
      circle: 'bg-purple-600',
    },
    {
      id: 3,
      title: 'Fast as Light',
      description:
        'Optimized with the latest technologies to ensure instant loading and real-time interactions.',
      bg: 'bg-teal-50',
      bgHover: 'hover:bg-teal-100',
      circle: 'bg-teal-600',
    },
  ];

  return (
    <div>
      <Navbar />
      <h2 className="text-4xl font-black text-center pt-20 text-gray-700 sm:text-5xl lg:pt-25 xl:pt-28 2xl:pt-30 2xl:text-6xl">
        Digital Identity
      </h2>
      <h2 className="text-4xl font-black text-center mt-2 bg-linear-to-r from-cyan-700 via-cyan-300 to-slate-600 lg:from-cyan-700 lg:via-cyan-300 lg:to-slate-800 2xl:from-cyan-900 2xl:via-cyan-300 2xl:to-slate-900 bg-clip-text text-transparent sm:text-5xl sm:mt-4 2xl:text-6xl">
        Redefined.
      </h2>
      <p className="text-center w-[95%] m-auto mt-2 text-gray-500 lg:w-[70%] lg:mt-4 xl:w-1/2 2xl:w-1/3 2xl:mt-5">
        Lumina is more than just a social media platform. It is a commitment to
        privacy, speed, and meaningful human creation
      </p>

      {/* ============== section -2 : stats =============  */}
      <div className="grid grid-cols-2 gap-2 p-3 m-auto mt-5 sm:grid-cols-4 max-w-225">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 p-5 text-center sm:p-4">
            <p className="text-2xl font-semibold text-gray-700">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ============= why lumina matters section =============  */}
      <div className="w-full max-w-250 m-auto mt-5 lg:mt-10">
        <div className="lg:flex lg:justify-between lg:items-baseline lg:px-15">
          <h3 className="text-center text-2xl font-bold text-gray-700 lg:text-3xl">
            Why Lumina Matters.
          </h3>
          <p className="text-sm text-center text-gray-500 w-[90%] m-auto mt-3 lg:w-100 lg:m-0">
            We built this platform based on three core principles that guide
            every feature we develop.
          </p>
        </div>

        {/* =========== luminaMattersArray ==========  */}
        <div className="p-5 grid gap-5 sm:grid-cols-2 sm:mt-5 lg:grid-cols-3">
          {luminaMattersArray.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${item.bg} ${item.bgHover}`}
            >
              <span
                className={`w-10 h-10 rounded-full block ${item.circle} text-white font-semibold text-center content-center text-sm shadow-[0px_5px_10px_#00000050]`}
              >
                {item.id}
              </span>
              <h3 className="text-lg font-bold mt-4 mb-4 text-gray-700">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ found section ============  */}
      <div className="m-auto mb-30 mt-5 sm:grid sm:grid-cols-2 w-full max-w-190 ">
        <div className="p-5">
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
              Connect.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="w-full h-20 text-center content-center bg-indigo-500 rounded-xl text-white font-semibold text-lg">
              Share.
            </span>
            <img
              className="w-full h-55 object-cover rounded-xl"
              src={selfie2}
            />
          </div>
        </div>
      </div>
      
      {/* ========== footer section ============  */}
      <Footer/>

    </div>
  );
};

export default About;
