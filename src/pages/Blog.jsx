import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import blogHero from '../assets/blogHero.jpg';
import blogBody from '../assets/blogBody.jpg';
import blogPost1 from '../assets/blogPost1.png';
import blogPost2 from '../assets/blogPodt2.jpg';
import blogPost3 from '../assets/blogPost3.jpg';
import userTeam1 from '../assets/userTeam1.jpg'
import userTeam2 from '../assets/userTeam2.jpg'
import userTeam3 from '../assets/userTeam3.jpg'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Blog = () => {

  const [blogs, setBlogs] = useState([
    {
      blogPostImage: blogPost1,
      category: 'TECHNOLOGY',
      headLine:'The Future of Social Connection in 2026',
      description: 'Exploring how decentralized networks and minimalist design are shaping the next generation of social media',
      userTeam: {
        profileImage: userTeam1,
        name:'Alex Rivera'
      },
      date:'May 10, 2026'
    },
    {
      blogPostImage: blogPost2,
      category: 'PRIVACY',
      headLine:'Why We Choose Zero Tracking Policy',
      description: 'Data privacy is not a feature, it is a fundamental right. Learn how Lumina protects your digital footprint.',
      userTeam: {
        profileImage: userTeam2,
        name:'Sarah Chen'
      },
      date:'May 08, 2026'
    },
    {
      blogPostImage: blogPost3,
      category: 'DESIGN',
      headLine:'The Psychology of Minimalist UI',
      description: 'How a clean interface reduces digital fatigue and helps users focus on meaningful interactions.',
      userTeam: {
        profileImage: userTeam3,
        name:'David Miller'
      },
      date:'May 05, 2026'
    },
  ])

  return (
    <div>
      <Navbar />

      {/* ========== blog head line =============  */}
      <span className="pt-18 block text-blue-600 font-semibold tracking-wider px-2 sm:px-8 sm:pt-20 lg:pt-22 xl:pt-25 2xl:pt-30 2xl:pl-50">
        LUMINA JOURNAL
      </span>
      <h2 className="text-5xl font-black text-gray-700 px-2 mt-3 sm:px-8  sm:text-6xl 2xl:pl-50">
        Insight &
      </h2>
      <h2 className="text-5xl font-black text-gray-700 px-2  sm:px-8 sm:text-6xl 2xl:pl-50 2xl:mb-10">
        Stories.
      </h2>
      <p className="px-2 mt-3 text-gray-500 w-full max-w-150 sm:px-8 sm:mt-5 2xl:ml-55">
        Latest news, deep drives into technology, and updates from the Lumina
        development team.
      </p>

      {/* ================== blog hero section ==================  */}
      <div className="mt-7 w-full sm:w-[92%] h-75 relative sm:m-auto sm:mt-7 sm:rounded-2xl overflow-hidden lg:w-240 lg:h-100 xl:mt-15 xl:mb-10 2xl:w-2/3 2xl:h-120">
        <img
          className="w-full h-full object-cover"
          src={blogHero}
          alt="blog hero"
        />
        <div className=" absolute top-0 left-0 text-white p-5 w-full h-full bg-black/35 flex flex-col items-start justify-center lg:p-10 xl:px-15 xl:py-20">
          <span className=" inline-block bg-blue-600 px-3 py-1 text-xs rounded-full mb-3">
            Featured Article
          </span>
          <h3 className="text-2xl font-bold sm:text-3xl lg:text-5xl max-w-200 lg:leading-15">
            How Lumina Scale to Support 1 Miillion Concurrent User
          </h3>
          <p className="text-sm mt-3 lg:text-lg">
            A deep drive into our backend architecture using Node.js and
            distributed databases to ensure zero downtime.
          </p>
          <div className="flex gap-3 mt-5 items-center lg:mt-15 xl:mt-10">
            <span className="text-xs block w-7 h-7 rounded-full bg-black/70 border border-white/50 text-center content-center lg:w-12 lg:h-12">
              ET
            </span>
            <p className="text-xs lg:text-base">
              Engineering Team
              <span className="inline-block w-1 h-1 rounded-full bg-white ml-2 mr-1"></span>
              12 min read
            </p>
          </div>
        </div>
      </div>

      {/* =================== blog body ===============  */}
      <section className=" w-full max-w-375 m-auto flex flex-col-reverse mt-5 mb-10 lg:flex-row items-baseline lg:p-7 lg:gap-7">
        <div className="p-4 lg:p-0">
          <img
            className="rounded-xl w-full h-50 object-cover sm:h-85 sm:mb-3 lg:h-70 2xl:h-80"
            src={blogBody}
            alt="blog body image"
          />
          <h3 className="text-2xl font-semibold p-2 lg:text-3xl lg:mb-3">
            The Decentralization of Personal Identities in 2026
          </h3>
          <p className="text-sm text-gray-400 px-2 mb-3 lg:mb-8">
            We are moving away from centralized control. Lumina is leading the
            charge in creating a truly owner-centric social network using
            distributed ledger techonology.
          </p>
          <div className="flex items-center px-2 gap-3 mt-5">
            <span className="block w-8 h-8 bg-black/80 text-white rounded-full text-center content-center font-bold pb-1">
              S
            </span>
            <div>
              <h4 className="font-semibold text-sm">Sudipto Das</h4>
              <p className="text-xs text-gray-400">
                CEO & Founder <span></span>10 min read
              </p>
            </div>
          </div>
        </div>

        <div className="w-[95%] m-auto shadow-[0_0px_10px_#00000010] mb-5 p-5 rounded-lg">
          <span className="block text-blue-600 text-xs font-black tracking-wide mb-5">
            MUST READ
          </span>
          <span className="text-sm block text-gray-400 font-mono mb-2 mt-3 font-semibold">
            01 /
          </span>
          <Link className="text-lg font-bold hover:text-blue-600">
            Optimizing Tailwind CSS for Large Scale Project
          </Link>
          <span className="text-sm block text-gray-400 font-mono mb-2 mt-3 font-semibold">
            02 /
          </span>
          <Link className="text-lg font-bold hover:text-blue-600">
            The Ethics of AI Content Moderation
          </Link>
          <span className="text-sm block text-gray-400 font-mono mb-2 mt-3 font-semibold">
            03 /
          </span>
          <Link className="text-lg font-bold hover:text-blue-600">
            Redefining Mobile First Interactions
          </Link>
          <div className="mt-10 w-full bg-blue-50/60 m-auto p-5 rounded-xl">
            <h4 className="text-2xl font-bold text-gray-700 mb-3">
              Lumina Weekly
            </h4>
            <p className="text-sm text-gray-500">
              Join 20,000+ developers receiving our weekly engineering update.
            </p>
            <form>
              <input
                className="block w-full h-12 border border-blue-400/20 bg-white rounded-lg mt-7 px-3 outline-0"
                type="email"
                placeholder="Enter email address"
              />
              <button className="bg-blue-400 w-full h-12 rounded-lg mt-4 text-white hover:-translate-y-1 cursor-pointer duration-300 hover:shadow-[0_10px_10px_#00000020]">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== main blog post (data from backend) ==============  */}
      <section className='block w-full max-w-300 m-auto'>
        <h3 className="text-3xl font-bold text-center mb-5">Latest Articles</h3>

        <div className="grid gap-5 p-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 shadow-2xl p-4 lg:p-0 lg:shadow-none rounded-2xl"
            >
              <img
                className="w-full h-50 object-cover rounded-xl"
                src={blog.blogPostImage}
                alt="Blog post image"
              />
              <span className="text-[10px] font-black tracking-widest text-blue-500 block">
                {blog.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-700 lg:px-4">
                {blog.headLine}
              </h3>
              <p className="text-sm text-gray-400 lg:px-4">
                {blog.description}
              </p>
              <div className="flex items-center justify-between lg:px-2">
                <div className="flex gap-2 items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={blog.userTeam.profileImage}
                  />
                  <p className="text-sm text-gray-700">{blog.userTeam.name}</p>
                </div>
                <p className="text-gray-400 text-xs">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <button className=" block w-40 h-12 bg-blue-400 mt-10 mb-20 text-white rounded-full m-auto hover:-translate-y-2 duration-300 hover:shadow-[0px_10px_10px_#00000020] cursor-pointer">
        Show More
      </button>

      {/* =================== Footer section ============  */}
      <Footer />
    </div>
  );
};

export default Blog;
