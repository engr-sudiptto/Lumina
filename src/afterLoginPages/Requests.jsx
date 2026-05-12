import React from 'react'
import AfterLoginNav from '../components/AfterLoginNav'

const Requests = () => {
  return (
    <div className="w-full max-w-300 m-auto pt-23 sm:pt-28 ">
      <AfterLoginNav />
      <h2 className='text-5xl text-center font-bold mt-20 text-gray-500'>Your all Requests</h2>
    </div>
  );
}

export default Requests