import React from 'react'
import { Link } from 'react-router-dom'
import luminaLogo from '../assets/lumina.png'

const ResetPassword = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <Link><img className='w-50 mb-5' src={luminaLogo} /></Link>
      <form className=' w-[95%] max-w-170 p-4 shadow-2xl rounded-xl sm:px-15 sm:py-10'>
        <h1 className='text-3xl font-semibold text-center mt-3 text-gray-700'>Reset Password</h1>
        <p className='text-center text-sm mt-3 text-gray-400'>An OTP will be sent to your authenticated email addesss for security reasons.</p>
        <label className='mt-10 block text-sm text-gray-700 font-semibold '>Username or Email</label>
        <input className='block w-full h-12 mb-3 mt-2 border px-4 rounded-lg border-gray-300 outline-0 text-gray-600 tracking-wider text-sm sm:mb-7 sm:mt-5' type="text" placeholder='e.g.name@example.com' required />
        <button className='block cursor-pointer w-full h-12 bg-blue-400/50 rounded-lg text-sm font-bold text-gray-700 hover:-translate-y-1 duration-300 hover:shadow-2xl' type='submit'>Send OTP</button>
        <Link to='/login' className='text-xs font-bold block text-right mt-10 mb-2 hover:-translate-x-1 text-gray-500 hover:text-blue-400/80 duration-150' >&larr; Back to Login</Link>
      </form>
    </div>
  )
}

export default ResetPassword