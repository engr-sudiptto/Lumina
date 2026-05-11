import React from 'react';
import profileImage from '../assets/userTeam3.jpg';
import profileBackgroundImage from '../assets/blogPost1.png';

const Profile = () => {
  return (
    <div className='w-full max-w-300 m-auto'>
      <div className='w-full h-60 lg:h-70'>
        <img className='w-full h-full object-cover' src={profileBackgroundImage} />
      </div>


      <div className='lg:flex lg:gap-10 lg:pl-5 xl:p-8'>
        {/* main div */}
        <div className='p-5 lg:basis-1/3'>
          <div className='w-30 h-30 lg:w-35 lg:h-35 xl:w-40 xl:h-40 -mt-21 lg:-mt-23 xl:-mt-35 relative'>
            <img className='w-full h-full object-cover rounded-full' src={profileImage} />
            <span className='block w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-green-500 absolute bottom-2 right-3 lg:bottom-3 lg:right-4'></span>
          </div>
          <h3 className='text-2xl font-semibold pl-2 mt-2 lg:text-3xl'>User Name</h3>
          <p className='text-xs text-gray-500 pl-2 lg:text-sm'>@username_01</p>
          <p className='text-sm  pl-2  mt-3 text-gray-500 font-semibold lg:text-base'>title: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='p-5 lg:basis-2/3 lg:mt-3'>
          <h3 className='text-lg pl-2 font-semibold text-gray-600 lg:text-2xl'>About</h3>
          <p className='text-sm pl-2 text-gray-400 lg:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa perferendis beatae esse ipsum dolorem! Recusandae laborum optio numquam quibusdam rerum explicabo eius nulla, minima magni molestias error ut itaque veritatis.</p>
        </div>
        
      </div>




    </div>
  );
};

export default Profile;
