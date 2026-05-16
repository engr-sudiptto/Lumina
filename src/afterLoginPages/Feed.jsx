import React from 'react'
import AfterLoginNav from '../components/AfterLoginNav'
import user1 from '../assets/userTeam1.jpg'
import user2 from '../assets/userTeam2.jpg'
import user3 from '../assets/userTeam3.jpg'
import imageA1 from '../assets/a1.jpg'
import imageA2 from '../assets/a2.jpg'
import imageA3 from '../assets/a3.jpg'
import imageA4 from '../assets/a4.jpg'
import imageA5 from '../assets/a5.jpg'
import imageA6 from '../assets/a6.jpg'
import imageA7 from '../assets/a7.jpg'
import imageA8 from '../assets/a8.jpg'

const Feed = () => {
  return (
    <div className="w-full max-w-300 m-auto pt-23 sm:pt-28 ">
      <AfterLoginNav />
      <h2 className="text-5xl text-center font-bold mt-20 text-gray-500">
        watch your Feed
      </h2>
    </div>
  );
}

export default Feed